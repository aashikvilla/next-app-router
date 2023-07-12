import { getProductById } from '@/app/apiService/ApiCalls'

import ProductDetails from '@/app/(common)/products/components/ProductDetails';
import CustomModal from '@/app/components/CustomModal';

export default async function Loading() {
   
    //const product = await getProductById(params.id);

  return (
  
    <CustomModal isOpen={true} children={  <h1>Loading ..</h1>}/>
    // <ProductDetails product={product} />
  )
}