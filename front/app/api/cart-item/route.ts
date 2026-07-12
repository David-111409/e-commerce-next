import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getCartByClerkId, createCart } from "@/lib/cart";
import { getCartItems, createCartItem, updateCartItem } from "@/lib/cart-item";

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
    const updatedItem = await updateCartItem(
      existingItem.documentId,
      existingItem.quantity + 1
    );

    return NextResponse.json(updatedItem);
  }

  const newItem = await createCartItem({
    quantity: 1,
    product: productId,
    cart: cart.documentId,
  });

  return NextResponse.json(newItem);
}

export async function PUT(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { documentId, quantity } = await request.json();

  const updatedItem = await updateCartItem(documentId, quantity);

  return NextResponse.json(updatedItem);
}
