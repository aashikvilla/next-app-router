import { getProductCategories } from "@/app/apiService/ApiCalls";
import ProductCategoryItem from "@/app/(common)/products/components/ProductCategoryItem";

export default async function ProductCategories() {
  const categories: String[] = await getProductCategories();

  return (
    <div className="bg-white p-4 rounded mb-4">
      <div className="flex space-x-4">
        <h4 className="text-xl font-semibold mt-2 ">Product Categories:</h4>
        {categories.map((category, index) => (
          <ProductCategoryItem key={index} name={category} />
        ))}
      </div>
    </div>
  );
}
