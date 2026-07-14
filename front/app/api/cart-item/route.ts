import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getCartByClerkId, createCart } from "@/lib/cart";
import { getCartItems, createCartItem } from "@/lib/cart-item";

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { productId } = await request.json();

  let cart = await getCartByClerkId(userId);

  if (!cart) {
    cart = await createCart(userId);
  }

  const cartItems = await getCartItems(cart.documentId);

  const existingItem = cartItems.find(
    (item: any) => item.product?.documentId === productId
  );

  if (existingItem) {
    return NextResponse.json(
      {
        message: "Product already in cart",
      },
      {
        status: 400,
      }
    );
  }

  const newItem = await createCartItem({
    product: productId,
    cart: cart.documentId,
  });

  return NextResponse.json({
    item: newItem,
    isNewItem: true,
  });
}
