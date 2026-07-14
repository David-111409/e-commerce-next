import { privateApi } from "./axios";

export async function createOrder(data: any) {
  const response = await privateApi.post("/orders", {
    data,
  });

  return response.data.data;
}
