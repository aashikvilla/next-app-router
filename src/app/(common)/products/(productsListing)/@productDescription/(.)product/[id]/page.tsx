import { getProductById } from '@/app/apiService/ApiCalls'
import React from 'react'
import ProductDetails from '@/app/(common)/products/components/ProductDetails';
import CustomModal from '@/app/components/CustomModal';

type Props = {
    params: { id: Number }
}

export default async function ProductDescriptionModal({params}: Props) {
    console.log(params);
  //delay render to check the loading state
  await new Promise((resolve) => setTimeout(resolve, 2000));
    const product = await getProductById(params.id);

  return (
   
    <CustomModal isOpen={true}
    children={<ProductDetails product={product} />} />
   
  )
}