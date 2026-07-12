import { privateApi } from "./axios";

export async function getCartByClerkId(clerkId: string) {
  const response = await privateApi.get(
    `/carts?filters[clerkId][$eq]=${clerkId}&populate[cart_items][populate][product][populate]=image`
  );

  return response.data.data[0] ?? null;
}

export async function createCart(clerkId: string) {
  const response = await privateApi.post("/carts", {
    data: {
      clerkId,
    },
  });

  return response.data.data;
}
