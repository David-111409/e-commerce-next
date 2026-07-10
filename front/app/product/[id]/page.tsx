import ProductDetails from "@/app/_components/ProductDetails";
import SimilarProducts from "@/app/_components/SimilarProducts";
import { getProduct, getSimilarProducts } from "@/lib/products";
import Link from "next/link";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Product({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);
  const similarProducts = await getSimilarProducts(
    product.category,
    product.documentId
  );

  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <nav aria-label="Breadcrumb" className="mb-10 w-fit mx-auto">
        <ol className="flex overflow-hidden rounded border border-gray-300 bg-white text-sm text-gray-700">
          <li>
            <Link
              href="/"
              className="block h-10 bg-gray-100 px-4 leading-10 transition-colors hover:text-gray-900"
            >
              Home
            </Link>
          </li>

          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -inset-s-px h-10 w-4 bg-gray-100 [clip-path:polygon(0_0,0%_100%,100%_50%)]" />

            <span className="block h-10 pr-4 pl-6 leading-10 transition-colors hover:text-gray-900">
              Product - Details / {product.id}
            </span>
          </li>
        </ol>
      </nav>
      <ProductDetails product={product} />
      <SimilarProducts products={similarProducts} />
    </section>
  );
}
