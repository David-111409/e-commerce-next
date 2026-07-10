import { publicApi } from "./axios";

export async function getProducts() {
  const response = await publicApi.get("/products?populate=*");

  return response.data.data;
}

export async function getProduct(documentId: string) {
  const response = await publicApi.get(`/products/${documentId}?populate=*`);
  return response.data.data;
}

export async function getSimilarProducts(category: string, documentId: string) {
  const response = await publicApi.get(
    `/products?filters[category][$eq]=${category}&filters[documentId][$ne]=${documentId}&populate=*`
  );

  return response.data.data;
}
