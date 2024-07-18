import { ChevronRight } from 'lucide-react'
import React from 'react'

function ShopHeroSection() { 
  return (
    <section className='flex flex-col justify-center items-center bg-shop-hero h-[316px]'>
        <p className='font-medium text-[48px]'>Shop</p>
        <div className='flex gap-2'>
            <p className='font-bold'>Home</p>
            <ChevronRight />
            <p>Shop</p>
        </div>
    </section>
  )
}

export default ShopHeroSection