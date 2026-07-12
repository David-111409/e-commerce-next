"use client";

import { ShoppingCart } from "lucide-react";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { useCart } from "@/context/CartContext";
import { Product } from "./ProductItem";
import { toast } from "sonner";
type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { isSignedIn } = useAuth();
  const { increaseCartCount } = useCart();

  const handleAddToCart = async () => {
    try {
      const response = await fetch("/api/cart-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product.documentId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // تحديث رقم السلة مباشرة
      if (data.isNewItem) {
        increaseCartCount();
      }
      toast.success("Added to cart", {
        description: `${product.title} has been added successfully.`,
        duration: 2000,
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong", {
        description: "We couldn't add this product to your cart.",
        duration: 2500,
      });
    }
  };

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <button className="mt-10 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-teal-700">
          <ShoppingCart size={22} />
          Log in to Add to Cart
        </button>
      </SignInButton>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      className="mt-10 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-teal-700"
    >
      <ShoppingCart size={22} />
      Add to Cart
    </button>
  );
}
