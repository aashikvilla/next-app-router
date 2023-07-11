import { getProductCategories } from "@/app/apiService/ApiCalls";
import ProductCategories from "./components/ProductCategories";
import ProductList from "./components/ProductList";

export default async function Products() {
 
  return (
    <div className="">
     <ProductCategories/>
     <ProductList/>
    </div>
  );
}
