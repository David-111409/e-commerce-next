import ProductItem, { Product } from "./ProductItem";

function ProductList({ productList }: { productList: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {productList.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
}

export default ProductList;
