import Image from "next/image";
import { List } from "lucide-react";
import Link from "next/link";

export type Product = {
  id: number;
  documentId: string;
  title: string;
  description: {
    type: string;
    children: {
      type: string;
      text: string;
    }[];
  }[];
  price: number;
  category: string;
  image: {
    url: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  instantDelivery: Boolean;
};

function ProductItem({ product }: { product: Product }) {
  console.log(product);
  const { documentId, title, price, category, image } = product;
  return (
    <Link
      href={`/product/${documentId}`}
      className="p-1 border-teal-400 rounded-lg hover:border hover:shadow-md duration-150"
    >
      <Image
        src={image.url}
        alt="banner-card"
        width={400}
        height={350}
        className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
      />
      <div className="flex items-center justify-between p-3 rounded-b-lg bg-gray-50">
        <div className="">
          <h2 className="text-[12px] font-medium line-clamp-1">{title}</h2>
          <h2 className="text-[10px] text-gray-400 flex  gap-1 items-center">
            <List className="w-4 h-4" /> {category}
          </h2>
        </div>
        <div className="flex items-center gap-2 ml-0.5">
          <span className="text-lg font-bold text-teal-600">${price}</span>

          <span className="text-sm text-gray-400 line-through">
            ${(price * 1.25).toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
