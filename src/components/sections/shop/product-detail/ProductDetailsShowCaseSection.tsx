import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react'
import ReactStars from 'react-stars';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination"
import MainButton from '@/components/common/MainButton';
import { MinusIcon, PlusIcon } from 'lucide-react';

function ProductDetailsShowCaseSection() {
    const MAX_QUANTITY = 5;
    const [quantity, setquantity] = useState(1);
    const mini = [
        "/images/sofa_mini.png",
        "/images/sofa_mini.png",
        "/images/sofa_mini.png",
        "/images/sofa_mini.png"
    ];

    const handleQuantityIncrement = () => {
        if(quantity === MAX_QUANTITY) return
        setquantity(quantity + 1)
    }
    const handleQuantityDecrement = () => {
        if(quantity === 1) return
        setquantity(quantity - 1)
    }

    const extraDetailData = [
        {
            item: "SKU",
            value: "SS001"
        },
        {
            item: "Category",
            value: "Sofas"
        },
        {
            item: "Tags",
            value: "Sofa, Chair, Home, Shop"
        },
        {
            item: "Share",
            value: (<div className='flex gap-[23px]'>
                <div>
                    <img src='/images/facebook.png' alt='facebook'/>
                </div>
                <div>
                    <img src='/images/linkedin.png' alt='linkedin'/>
                </div>
                <div>
                    <img src='/images/twitter.png' alt='twitter'/>
                </div>
            </div>
            )
        },
    ]

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* LHS */}
        <div className='flex gap-8'>
            <div className='hidden md:inline-flex flex-col gap-8'>
                {mini.map((item, index) => (
                    <div key={index} className='bg-primaryLight h-[80px] rounded-[8px] inline-flex items-center px-2'>
                        <img src={item} alt='product mini glance'/>
                    </div>
                ))}
            </div>
            <div className='bg-primaryLight rounded-[8px] h-[500px] items-center flex flex-col justify-center'>
                <img src={"/images/sofa.png"} alt='product'/>
            </div>
        </div>
        {/* RHS */}
        <div>
            <p className='text-[42px]'>Asgaar sofa</p>
            <p className='text-customGray text-24 font-medium'>Rs. 250,000.00</p>
            <div className='flex items-center gap-[22px]'>
                <ReactStars 
                    count={5}
                    size={24}
                    color1={"#ffC700"}
                />
                <Separator orientation='vertical' className='h-[40px] border border-separator'/>
                <p>5 Customer Review</p>
            </div>
            <p className='mt-4'>
                Setting the bar as one of the loudest speakers in its class, the 
                Kilburn is a compact, stout-hearted hero with a well-balanced 
                audio which boasts a clear midrange and extended highs for a sound.
            </p>
            <div>
                <p className='text-customGray text-[14] mb-[12px] mt-[22px]'>Size</p>
                <Pagination className='flex justify-start'>
                    <PaginationContent className='flex gap-[38px]'>
                        <PaginationItem className='h-[60px] w-[60px]'>
                            <PaginationLink href="/shop?page=1" isActive>L</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/shop?page=2">XL</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/shop?page=3">XS</PaginationLink>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

            <div className='flex gap-[18px] items-center mt-32'>
                <div className='inline-flex h-[64px] px-[15px] gap-[35px] items-center border border-separator rounded-[15px]'>
                    <MinusIcon 
                        className='cursor-pointer'
                        onClick={handleQuantityDecrement}
                    />
                    <p className='font-semibold text-normal select-none'>{quantity}</p>
                    <PlusIcon 
                        className='cursor-pointer' 
                        onClick={handleQuantityIncrement}
                    />
                </div>
                <div>
                    <MainButton 
                        text='Add to Cart' 
                        classes='bg-white hover:bg-white text-black border border-black rounded-[15px]'
                    />
                </div>
            </div>

            <div className='my-[41px]'>
                <Separator className='border border-separator'/>
            </div>
            <div className='flex flex-col gap-4'>
                {extraDetailData.map((item, index) => (
                    <div key={index} className='flex gap-4'>
                        <p className='text-customGray'>{item.item}</p>
                        <p className='text-customGray'>:</p>
                        <p className='text-customGray'>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProductDetailsShowCaseSection