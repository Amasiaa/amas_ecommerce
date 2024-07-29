"use client";

import { Separator } from '@radix-ui/react-separator'
import React, { useEffect, useState } from 'react'
import MainButton from '../common/MainButton';
import { useAtom } from 'jotai';
import { cartAtom } from '@/storage/jotai';
import { useRouter } from 'next/navigation';

function CartSection({ toggleShowCart }: { toggleShowCart: () => void }) {
    const [products, setProducts] = useAtom(cartAtom);

    const [subTotal, setSubTotal] = useState(0)
    const router = useRouter();

    const removeProductFromCart = (productId: number | string) => {
        const filteredProducts = products.filter(
            (product) => product.id !== productId
        );
        setProducts(filteredProducts);
    }

    const computeSubTotal = () => {
        let total = 0;
        for (const product of products) {
            total += product.quantity * product.unitPrice;
        }
        setSubTotal(total);
    }

    useEffect(() => { computeSubTotal() }, [products]);
    return (
        <div className='w-[417px] h-[746px] bg-white p-[30px] flex flex-col justify-between'>
            <div className=''>
                <div className='flex justify-between items-center mb-[36px]'>
                    <p className='text-24 font-semibold'>Shopping Cart</p>
                    <div onClick={toggleShowCart} className='hover:cursor-pointer'>
                        <img src='/images/cart_alt_icon.png' alt='cart icon' />
                    </div>
                </div>
                <Separator className='border border-separator' />
                <div className='flex flex-col gap-[20px] mt-[24px]'>
                    {products.map((product, index) => {
                        return (
                            <div key={index} className='flex items-center gap-[32px] w-full justify-between'>
                                <div>
                                    <img
                                        src={product.productImageUrl}
                                        alt='product image'
                                        className='w-[108px] h-[105px] object-cover rounded-[10px]' />
                                </div>
                                <div>
                                    <p className='text-normal'>{product.productName}</p>
                                    <p>{product.quantity} x <span className='text-primary font-medium text-sm'>Rs. {product.unitPrice}</span></p>
                                </div>
                                <div onClick={() => removeProductFromCart(product.id)} className='cursor-pointer'>
                                    <img
                                        src="/images/delete_icon.png"
                                        alt='close image' />
                                </div>
                            </div>
                        );
                    })}

                    {products.length === 0 && (
                        <div className='flex justify-center items-center mt-8 text-customGray'>
                            No product in the cart...
                        </div>
                    )}
                </div>
            </div>
            <div>
                <div className='flex justify-between mb-[23px]'>
                    <p>Subtotal</p>
                    <p className='text-primary text-normal font-semibold'>Rs. {subTotal}</p>
                </div>
                {subTotal ? (
                    <div>
                        <Separator />
                        <div className='mt-8 flex justify-center'>
                            <MainButton
                                text="Checkout"
                                action={() => router.push('/checkout')}
                                classes='bg-white hover:bg-wihte hover:text-primary text-black border border-black rounded-[50px] h-[40px] w-[120px]'
                            />
                        </div>
                    </div>
                ) : (<div></div>)}
            </div>
        </div>
    )
}

export default CartSection