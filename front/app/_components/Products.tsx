import { getProducts } from "@/lib/products";
import ProductList from "./ProductList";

export default async function Products() {
  const productList = await getProducts();

  return (
    <section className="py-10">
      <div className="container  px-4  mx-auto lg:mx-0">
        <h2 className="mb-4 text-3xl font-bold">Our Latest Products</h2>
        <ProductList productList={productList} />
      </div>
    </section>
  );
}
