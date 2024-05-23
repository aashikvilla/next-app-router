import { Product } from "../types/Product";
import { User } from "../types/User";
import { ApiRouteConstants } from "./ApiRouteConstants";
import { fetchData } from "./ApiService";

export async function getDelayedUsers() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return fetchData<User[]>(ApiRouteConstants.Users.GetAll); 
}


export async function getUsers() {
    return fetchData<User[]>(ApiRouteConstants.Users.GetAll);   
  }

  
  export async function getProductCategories() {
    return fetchData<String[]>(ApiRouteConstants.Products.GetCategories);   
  }


  export async function getProducts() {
    return fetchData<Product[]>(ApiRouteConstants.Products.GetAll);   
   
  }

  export async function getLimitedProducts() {
    return fetchData<Product[]>(ApiRouteConstants.Products.GetAllByLimit(6));   
  }
  
  export async function getProductById(id:Number) {
    return fetchData<Product>(ApiRouteConstants.Products.GetById(id));   
   
  }
  