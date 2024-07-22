"use client";

import ProductDetailsExtraInfoSection from '@/components/sections/shop/product-detail/ProductDetailsExtraInfoSection';
import ProductDetailsRelatedSection from '@/components/sections/shop/product-detail/ProductDetailsRelatedSection';
import ProductDetailsShowCaseSection from '@/components/sections/shop/product-detail/ProductDetailsShowCaseSection';
import ProductDetailsTopSection from '@/components/sections/shop/product-detail/ProductDetailsTopSection';
import { Separator } from '@/components/ui/separator';
import { useSearchParams } from 'next/navigation';
import React from 'react'

function ProductDetailsPage({params, }: {
    params: {
        product_id: string
    }
}) {
    //const params = useSearchParams();
    console.log("~~ ProductDetailPage ~~ params: ", params);
  return (
    <div className='mt-24 lg:mt-8'>
      <ProductDetailsTopSection product_id={params.product_id}/>
      <div className='mt-8 px-4 md:px-[50px] lg:px-[100px]'>
        <ProductDetailsShowCaseSection />
      </div>
      <div className='mt-[40px]'>
        <Separator />
      </div>
      <div className='mt-8 px-4 md:px-[50px] lg:px-[100px]'>
        <ProductDetailsExtraInfoSection />
      </div>
      <div className='mt-[40px]'>
        <Separator />
      </div>
      <div className='mt-8 px-4 md:px-[50px] lg:px-[100px]'>
        <ProductDetailsRelatedSection />
      </div>
    </div>
  )
}

export default ProductDetailsPage