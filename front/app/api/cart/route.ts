import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getCartByClerkId, createCart } from "@/lib/cart";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let cart = await getCartByClerkId(userId);

  if (!cart) {
    cart = await createCart(userId);
  }

  return NextResponse.json(cart);
}
