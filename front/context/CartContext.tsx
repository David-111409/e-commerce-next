"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type CartContextType = {
  cartItemsCount: number;
  refreshCartCount: () => Promise<void>;
  increaseCartCount: () => void;
  decreaseCartCount: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  async function refreshCartCount() {
    const response = await fetch("/api/cart/count");

    if (!response.ok) return;

    const data = await response.json();

    setCartItemsCount(data.count);
  }

  function increaseCartCount() {
    setCartItemsCount((count) => count + 1);
  }

  function decreaseCartCount() {
    setCartItemsCount((count) => Math.max(0, count - 1));
  }

  useEffect(() => {
    refreshCartCount();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItemsCount,
        refreshCartCount,
        increaseCartCount,
        decreaseCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
