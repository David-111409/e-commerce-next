import { privateApi } from "./axios";

export async function getCartItems(cartId: string) {
  const response = await privateApi.get(
    `/cart-items?filters[cart][documentId][$eq]=${cartId}&populate=*`
  );

  return response.data.data;
}

export async function createCartItem(data: {
  quantity: number;
  product: string;
  cart: string;
}) {
  const response = await privateApi.post("/cart-items", {
    data,
  });

  return response.data.data;
}

export async function updateCartItem(documentId: string, quantity: number) {
  const response = await privateApi.put(`/cart-items/${documentId}`, {
    data: {
      quantity,
    },
  });

  return response.data.data;
}

export async function deleteCartItem(documentId: string) {
  const response = await privateApi.delete(`/cart-items/${documentId}`);

  return response.data;
}
