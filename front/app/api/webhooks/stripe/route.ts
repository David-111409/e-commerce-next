import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { sendOrderEmail } from "@/lib/send-email";
import { getCartByClerkId } from "@/lib/cart";
import { getCartItems, deleteCartItem } from "@/lib/cart-item";

import { createOrder } from "@/lib/order";
import { createOrderItem } from "@/lib/order-item";

export async function POST(req: Request) {
  const body = await req.text();

  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      {
        message: "Missing stripe signature",
      },
      {
        status: 400,
      }
    );
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Webhook verification failed",
      },
      {
        status: 400,
      }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const clerkId = session.metadata?.clerkId;

    if (!clerkId) {
      return NextResponse.json(
        {
          message: "Missing clerk id",
        },
        {
          status: 400,
        }
      );
    }

    // 1 - Get user's cart

    const cart = await getCartByClerkId(clerkId);

    if (!cart) {
      return NextResponse.json(
        {
          message: "Cart not found",
        },
        {
          status: 400,
        }
      );
    }

    // 2 - Get cart items

    const cartItems = await getCartItems(cart.documentId);

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json(
        {
          message: "Cart is empty",
        },
        {
          status: 400,
        }
      );
    }

    // 3 - Create Order

    const order = await createOrder({
      email: session.customer_details?.email ?? "",

      clerkId,

      total: (session.amount_total ?? 0) / 100,

      stripeSessionId: session.id,

      paymentStatus: "paid",
    });

    // 4 - Create Order Items

    for (const item of cartItems) {
      await createOrderItem({
        quantity: 1,

        price: item.product.price,

        product: item.product.documentId,

        order: order.documentId,
      });
    }

    // 5 - Delete Cart Items

    for (const item of cartItems) {
      await deleteCartItem(item.documentId);
    }
    console.log("Sending email to:", session.customer_details?.email);
    await sendOrderEmail({
      email: session.customer_details?.email!,
      orderId: order.documentId,
    });

    console.log("📧 Email sent");
  }

  return NextResponse.json({
    received: true,
  });
}
