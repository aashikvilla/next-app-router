import { getProductById } from '@/app/apiService/ApiCalls'
import React from 'react'
import ProductDetails from '@/app/(common)/products/components/ProductDetails';

type Props = {
    params: { id: Number }
}

export default async function ProductDescription({params}: Props) {
    console.log(params);

    const product = await getProductById(params.id);

  return (
    <ProductDetails product={product} />
  )
}