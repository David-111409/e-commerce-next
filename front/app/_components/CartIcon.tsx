"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { cartItemsCount } = useCart();

  return (
    <Link href="/cart" className="relative flex items-center justify-center">
      <ShoppingCart className="h-6 w-6 text-gray-700 transition hover:text-primary" />

      {cartItemsCount > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          {cartItemsCount}
        </span>
      )}
    </Link>
  );
}
