import { Product } from "@/app/types/Product";
import Image from "next/image";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <Image width={100} height={100} src={product.image} alt={product.title} className="max-w-md max-h-80 w-full object-cover mb-4" />
      <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">${product.price?.toFixed(2)}</span>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">
            {product.rating.rate} <i className="fas fa-star"></i>
          </span>
          <span className="text-gray-600">
            ({product.rating.count} reviews)
          </span>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-gray-700">
        <span className="font-semibold">Category:</span> {product.category}
      </p>
    </div>
  );
};

export default ProductDetails;
