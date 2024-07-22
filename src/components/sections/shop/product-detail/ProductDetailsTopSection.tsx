import { Separator } from '@/components/ui/separator'
import { ChevronRight } from 'lucide-react'
import React from 'react'

function ProductDetailsTopSection({product_id, }: {product_id: string}) {
  return (
    <section className='bg-primaryLight flex h-[100px] items-center gap-3 px-4 md:px-[70px]'>
        <div className='text-separator'>Home</div>
        <ChevronRight />
        <div className='text-separator'>Shop</div>
        <ChevronRight />
        <Separator orientation='vertical' className='h-[40px] border border-separator'/>
        <div className='font-semibold'>Product {product_id}</div>
    </section>
  )
}

export default ProductDetailsTopSection