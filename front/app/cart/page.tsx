import { cookies } from "next/headers";
import CartItem from "../_components/CartItem";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
type CartItem = {
  documentId: string;
  quantity: number;
  product: {
    documentId: string;
    title: string;
    price: number;
  };
};

type Cart = {
  cart_items: CartItem[];
};

async function getCart(): Promise<Cart | null> {
  const cookieStore = await cookies();
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function CartPage() {
  const cart = await getCart();

  if (!cart || cart.cart_items?.length === 0 || !cart.cart_items) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="flex max-w-md flex-col items-center text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
            <ShoppingCart className="h-12 w-12 text-gray-400" />
          </div>

          <h1 className="mb-3 text-3xl font-bold text-gray-800">
            Your cart is empty
          </h1>

          <p className="mb-8 text-gray-500">
            Looks like you haven’t added anything to your cart yet. Start
            exploring our products and find something you like.
          </p>

          <Link
            href="/"
            className="rounded-lg bg-teal-600 px-8 py-3 font-semibold text-white transition hover:bg-teal-700"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const total = cart.cart_items?.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      <div className="space-y-5">
        {cart.cart_items?.map((item) => (
          <CartItem key={item.documentId} item={item} />
        ))}
      </div>

      <div className="mt-10 flex justify-between border-t pt-6">
        <h2 className="text-2xl font-bold">Total</h2>
        <p className="text-2xl font-bold">${total?.toFixed(2)}</p>
      </div>
    </main>
  );
}
