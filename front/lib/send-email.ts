import { resend } from "./email";

export async function sendOrderEmail({
  email,
  orderId,
}: {
  email: string;
  orderId: string;
}) {
  await resend.emails.send({
    from: "Your Store <onboarding@resend.dev>",
    to: "muhammaddawoud600@gmail.com",

    subject: "Order Confirmation",

    html: `
      <h1>Thank you for your order!</h1>

      <p>
        Your order has been received successfully.
      </p>

      <p>
        Order ID: ${orderId}
      </p>
    `,
  });
}
