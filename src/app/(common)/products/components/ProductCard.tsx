//'use client'
import { Product } from "@/app/types/Product";
import Image from "next/image";
import Link from "next/link";
//import { useRouter } from "next/navigation";

type ProductCardProps = {
  product: Product;
}

const ProductCard = ({ product }:ProductCardProps) => {

  //const router = useRouter();

  return (
    <div className="bg-white rounded shadow-md p-4">
   
      <Image width={100} height={100} src={product.image} alt={product.title} className="w-full h-56 object-cover mb-4" />

     
     
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href={`products/product/${product.id}`}
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
