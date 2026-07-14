"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type CartItemProps = {
  item: {
    documentId: string;
    product: {
      documentId: string;
      title: string;
      price: number;
      image?: {
        url: string;
      };
    };
  };
};

export default function CartItem({ item }: CartItemProps) {
  const router = useRouter();
  const { decreaseCartCount } = useCart();

  async function handleDelete() {
    try {
      const response = await fetch(`/api/cart-item/${item.documentId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      decreaseCartCount();

      toast.success("Removed from cart", {
        description: `${item.product.title} has been removed.`,
        duration: 2000,
      });
      router.refresh();
    } catch (error) {
      toast.error("Delete failed", {
        description: "Unable to remove this item from your cart.",
        duration: 2500,
      });
    }
  }

  return (
    <div className="flex items-center justify-between rounded-lg border p-5">
      <div className="flex items-center gap-5">
        <Link href={`/product/${item.product.documentId}`}>
          {item.product.image && (
            <Image
              src={item.product.image.url}
              width={200}
              height={200}
              alt={item.product.title}
              className="cursor-pointer rounded-lg object-cover"
            />
          )}
        </Link>

        <div>
          <Link href={`/product/${item.product.documentId}`}>
            <h2 className="text-lg font-semibold hover:underline">
              {item.product.title}
            </h2>
          </Link>

          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={handleDelete}
              className="ml-3 text-red-500 cursor-pointer"
            >
              <Trash size={20} />
            </button>
          </div>
        </div>
      </div>

      <p className="text-lg font-bold">${item.product.price.toFixed(2)}</p>
    </div>
  );
}
