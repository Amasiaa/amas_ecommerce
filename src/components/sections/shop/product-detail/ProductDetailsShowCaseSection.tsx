import { Separator } from '@/components/ui/separator';
import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination"
import MainButton from '@/components/common/MainButton';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';
import { useAtom, useSetAtom } from 'jotai';
import { cartAtom } from '@/storage/jotai';

function ProductDetailsShowCaseSection({ product_id, }: { product_id: string }) {
    const MAX_QUANTITY = 5;
    const [quantity, setquantity] = useState(1);
    const [isMounted, setisMounted] = useState(false)
    const [cart, setCart] = useAtom(cartAtom);
    const product = PRODUCTS.find((product) => product.id === product_id);


    const mini = [
        "/images/sofa_mini.png",
        "/images/sofa_mini.png",
        "/images/sofa_mini.png",
        "/images/sofa_mini.png"
    ];

    const handleQuantityIncrement = () => {
        if (quantity === MAX_QUANTITY) return
        setquantity(quantity + 1)
    }
    const handleQuantityDecrement = () => {
        if (quantity === 1) return
        setquantity(quantity - 1)
    }

    const handleAddToCart = () => {
        const productInCart = cart.find((product) => product.id === product_id);
        // NOTE: When we dont have the product already in the cart[EXISTING PRODUCT] *

        if (productInCart) {
            let updatedProducts = [];
            const productObject = {
                id: product_id,
                productImageUrl: productInCart?.productImageUrl,
                productName: productInCart?.productName,
                quantity,
                unitPrice: Number(productInCart?.unitPrice),
            }

            // NOTE: Remove it from cart & set afresh
            const filteredProducts = cart.filter((product) => product.id !== product_id);
            updatedProducts = filteredProducts;
            updatedProducts.push(productObject);

            setCart(updatedProducts);
        }

        // NOTE: When we dont have the product already in the cart[FRESH PRODUCT] *

        if (!productInCart) {
            const product = PRODUCTS.find((product) => product.id === product_id);
            const productObject = {
                id: product_id,
                productImageUrl: product?.imageUrl,
                productName: product?.title,
                quantity,
                unitPrice: Number(product?.price),
            }

            setCart((prevProduct) => [...prevProduct, productObject]);
        }



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
                    <img src='/images/facebook.png' alt='facebook' />
                </div>
                <div>
                    <img src='/images/linkedin.png' alt='linkedin' />
                </div>
                <div>
                    <img src='/images/twitter.png' alt='twitter' />
                </div>
            </div>
            )
        },
    ]

    useEffect(() => {
        setisMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* LHS */}
            <div className='flex gap-8'>
                <div className='hidden md:inline-flex flex-col gap-8'>
                    {mini.map((item, index) => (
                        <div key={index} className='bg-primaryLight h-[80px] rounded-[8px] inline-flex items-center px-2'>
                            <img src={item} alt='product mini glance' />
                        </div>
                    ))}
                </div>
                <div className='bg-primaryLight rounded-[8px] h-[500px] items-center flex flex-col justify-center'>
                    <img
                        src={product?.imageUrl}
                        alt='product'
                        className='w-[425px] h-[500px] object-cover rounded-[10px]'
                    />
                </div>
            </div>
            {/* RHS */}
            <div>
                <p className='text-[42px]'>{product?.title}</p>
                <p className='text-customGray text-24 font-medium'>Rs. {product?.price}</p>
                <div className='flex items-center gap-[22px]'>
                    <ReactStars
                        count={5}
                        size={24}
                        color1={"#ffC700"}
                    />
                    <Separator orientation='vertical' className='h-[40px] border border-separator' />
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
                            action={handleAddToCart}
                        />
                    </div>
                </div>

                <div className='my-[41px]'>
                    <Separator className='border border-separator' />
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