import ProductItem from "./ProductItem";
import { Product } from "./ProductItem";
import ProductList from "./ProductList";
function SimilarProducts({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return (
      <section className="mt-16 rounded-xl border bg-gray-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          No Similar Products Found
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          We couldn't find any courses similar to this one. Explore our other
          courses to find what suits you.
        </p>
      </section>
    );
  }
  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-bold">Similar Products</h2>

      <ProductList productList={products} />
    </section>
  );
}

export default SimilarProducts;
