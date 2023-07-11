import { getProductCategories } from "@/app/apiService/ApiCalls";
import ProductCategoryItem from "./ProductCategoryItem";

export default async function ProductCategories() {
  const categories: String[] = await getProductCategories();

  return (
    <div className="bg-white p-4 rounded mb-4">
   
    <div className="flex space-x-4">
    <h4 className="text-xl font-semibold mt-2 ">Product Categories:</h4>
      {categories.map((category, index) => (
        <ProductCategoryItem key={index} name={category}  />
      ))}
    </div>
  </div>
    // <div>
    //   <div className="flex space-x-4">
    //     <h2>Product Categories : </h2>

    //     {categories.map((c, ind) => {
    //       return <ProductCategoryItem key={ind} name={c} />;
    //     })}
    //   </div>
    // </div>
  );
}
