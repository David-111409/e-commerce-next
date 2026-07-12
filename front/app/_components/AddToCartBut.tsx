"use client";

import { ShoppingCart } from "lucide-react";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { Product } from "./ProductItem";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { isSignedIn } = useAuth();

  const handleAddToCart = async () => {
    console.log(product);

    // لاحقًا:
    // await axios.post("/api/cart-items", {
    //   productId: product.id,
    //   quantity: 1,
    // });
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
