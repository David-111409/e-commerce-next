import Image from "next/image";
import { Product } from "./ProductItem";
import AddToCartButton from "./AddToCartBut";

async function ProductDetails({ product }: { product: Product }) {
  const { title, price, category, description, image, instantDelivery } =
    product;

  return (
    <div className="grid gap-10 max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2">
      {/* Image */}
      <div>
        <Image
          src={image.url}
          alt={title}
          width={700}
          height={500}
          className="w-full rounded-xl object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col">
        <span className="w-fit rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
          {category}
        </span>

        <h1 className="mt-4 text-4xl font-bold">{title}</h1>

        <p className="mt-5 text-gray-600 leading-8">
          {description[0]?.children[0]?.text}
        </p>

        <div className="mt-8 flex items-center gap-4">
          <span className="text-4xl font-bold text-teal-600">${price}</span>

          <span className="text-xl text-gray-400 line-through">
            ${(price * 1.25).toFixed(2)}
          </span>
        </div>

        <AddToCartButton product={product} />

        <div className="mt-8 rounded-lg border p-5">
          <h3 className="mb-3 text-lg font-semibold">This course includes</h3>

          <ul className="space-y-2 text-gray-600">
            {instantDelivery && <li>✓ Instant delivery</li>}
            <li>✓ Lifetime access</li>
            <li>✓ Instant delivery</li>
            <li>✓ Certificate of completion</li>
            <li>✓ Downloadable resources</li>
            <li>✓ Full source code</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
