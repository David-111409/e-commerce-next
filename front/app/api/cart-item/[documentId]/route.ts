import { NextResponse } from "next/server";
import { deleteCartItem } from "@/lib/cart-item";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ documentId: string }> }
) {
  try {
    const { documentId } = await params;

    const deletedItem = await deleteCartItem(documentId);

    return NextResponse.json(deletedItem);
  } catch (error) {
    console.error("DELETE CART ITEM ERROR:", error);

    return NextResponse.json(
      { message: "Failed to delete cart item" },
      { status: 500 }
    );
  }
}
