import { privateApi } from "./axios";

export async function createOrderItem(data: any) {
  const response = await privateApi.post("/order-items", {
    data,
  });

  return response.data.data;
}
