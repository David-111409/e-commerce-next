"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    try {
      setLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      window.location.href = data.url;
    } catch (error: any) {
      toast.error("Checkout failed", {
        description: error.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full cursor-pointer rounded-lg bg-teal-600 py-3 text-lg font-semibold text-white transition hover:bg-teal-700 disabled:opacity-50"
    >
      {loading ? "Redirecting..." : "Proceed to Checkout"}
    </button>
  );
}
