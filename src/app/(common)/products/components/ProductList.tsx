import { getLimitedProducts,  } from "@/app/apiService/ApiCalls";
import { Product } from "@/app/types/Product";
import ProductCard from "./ProductCard";

export default async function ProductList() {
  const products:Product[] = await getLimitedProducts();

  return (
    <div>
    <h2 className="text-2xl font-semibold mb-4">Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </div>
  );
}
