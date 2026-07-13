import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const body = await req.text();

  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ message: "Missing signature" }, { status: 400 });
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
      { message: "Webhook verification failed" },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    console.log("Payment successful:", session.id);

    console.log("Customer email:", session.customer_details?.email);

    console.log("Metadata:", session.metadata);

    // Next steps:
    // 1- Create order in Strapi
    // 2- Delete cart items
    // 3- Send email
  }

  return NextResponse.json({ received: true });
}
