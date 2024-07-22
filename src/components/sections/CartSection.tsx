import { Separator } from '@radix-ui/react-separator'
import React, { useEffect, useState } from 'react'

function CartSection({ toggleShowCart }: { toggleShowCart: () => void }) {
    const [products, setProducts] = useState([
        {
            id: "1",
            productImageUrl: "/images/sofa.png",
            productName: "Asgaard sofa",
            quantity: 1,
            unitPrice: 250000,
        },
        {
            id: "2",
            productImageUrl: "/images/sofa.png",
            productName: "Casaliving Wood",
            quantity: 1,
            unitPrice: 270000,
        },
    ]);

    const [subTotal, setSubTotal] = useState(0)

    const removeProductFromCart = (product_id: number | string) => { }

    const computeSubTotal = () => {
        let total = 0;
        for (const product of products) {
            total += product.quantity * product.unitPrice;
        }
        setSubTotal(total);
    }

    useEffect(() => { computeSubTotal() }, [products]);
    return (
        <div className='w-[417px] h-[746px] bg-white p-[30px]'>
            <div className='flex justify-between items-center mb-[36px]'>
                <p className='text-24 font-semibold'>Shopping Cart</p>
                <div onClick={toggleShowCart} className='hover:cursor-pointer'>
                    <img src='/images/cart_alt_icon.png' alt='cart icon' />
                </div>
            </div>
            <Separator className='border border-separator' />
            <div>
                {products.map((product, index) => (
                    <div key={index} className='flex items-center gap-[32px] w-full justify-between'>
                        <div>
                            <img
                                src={product.productImageUrl}
                                alt='product image'
                                className='w-[108px] h-[105]'
                            />
                        </div>
                        <div>
                            <p className='text-normal'>{product.productName}</p>
                            <p>{product.quantity} x <span className='text-primary font-medium text-sm'>Rs. {product.unitPrice}</span></p>
                        </div>
                        <div>
                            <img
                                src="/images/delete_icon.png"
                                alt='close image'
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <p>Subtotal</p>
                <p>{subTotal}</p>
            </div>
            <Separator />
            <div>

            </div>
        </div>
    )
}

export default CartSection