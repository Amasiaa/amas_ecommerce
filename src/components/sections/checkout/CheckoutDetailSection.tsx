"use client";

import MainButton from '@/components/common/MainButton';
import { Separator } from '@/components/ui/separator';
import { cartAtom } from '@/storage/jotai';
import { useAtomValue } from 'jotai';

function CheckoutDetailSection() {
    const products = useAtomValue(cartAtom);
    
    const computeSubTotal = () => {
        let total = 0;
        for (const product of products) {
            total += product.quantity * product.unitPrice;
        }
        return total;
    }

    return (
        <section className='md:mt-[50px]'>
            <div className='flex justify-between'>
                <p className='font-bold text-[18px]'>Product</p>
                <p className='font-bold text-[18px]'>Subtotal</p>
            </div>
            <div className='flex flex-col justify-between gap-4 mt-4'>
                {products.map((product, index) => (
                    <div key={index} className='flex justify-between'>
                        <p className='text-separator text-sm'>
                            {product.productName} <span className='font-bold text-black'>x {product.quantity}</span>
                        </p>
                        <p>{Number(product.unitPrice) * Number(product.quantity)}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-col justify-between gap-4 mt-4'>
                <div className='flex justify-between'>
                    <p className='text-separator text-sm'>Total</p>
                    <p className='text-primary font-bold text-20'>Rs. {computeSubTotal()}</p>
                </div>
            </div>
            <div className='my-[30px]'>
                <Separator />
            </div>
            <p className='text-justify'>
                Your personal data will be used to support your experience throught this website,
                to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.
            </p>
            <div className='mt-16 flex justify-center'>
                <MainButton text='Place order' classes='bg-white hover:bg-white text-black h-[55px] rounded-[15px] border border-separator'/>
            </div>
        </section>
    )
}

export default CheckoutDetailSection