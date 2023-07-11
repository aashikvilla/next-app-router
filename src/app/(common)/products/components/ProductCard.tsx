import { Product } from "@/app/types/Product";

type ProductCardProps = {
  product: Product;
}

const ProductCard = ({ product }:ProductCardProps) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
