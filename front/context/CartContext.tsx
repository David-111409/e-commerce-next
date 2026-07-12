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
  setCartItemsCount: (count: number) => void;
  refreshCartCount: () => void;
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

  useEffect(() => {
    refreshCartCount();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItemsCount,
        setCartItemsCount,
        refreshCartCount,
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
