import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getCartByClerkId } from "@/lib/cart";
import { getCartItems } from "@/lib/cart-item";

export async function POST() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await currentUser();

  const cart = await getCartByClerkId(userId);

  if (!cart) {
    return NextResponse.json({ message: "Cart not found" }, { status: 404 });
  }

  const cartItems = await getCartItems(cart.documentId);

  if (cartItems.length === 0) {
    return NextResponse.json({ message: "Cart is empty" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",

    customer_email: user?.emailAddresses[0]?.emailAddress,

    metadata: {
      clerkId: userId,
    },

    payment_method_types: ["card"],

    line_items: cartItems.map((item: any) => ({
      quantity: 1,

      price_data: {
        currency: "usd",

        product_data: {
          name: item.product.title,
        },

        unit_amount: Math.round(item.product.price * 100),
      },
    })),

    success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,

    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
  });

  return NextResponse.json({
    url: session.url,
  });
}
