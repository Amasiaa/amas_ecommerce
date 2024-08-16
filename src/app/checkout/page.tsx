import Hero from '@/components/common/Hero'
import CheckoutBillingForm from '@/components/forms/CheckoutBillingForm'
import CheckoutDetailSection from '@/components/sections/checkout/CheckoutDetailSection'
import ShopBannerSection from '@/components/sections/shop/ShopBannerSection'
import ShopHeroSection from '@/components/sections/shop/ShopHeroSection'
import React from 'react'

function CheckoutPage() {
    return (
        <div>
            <Hero title='Checkout' />
            <div className='flex flex-col md:flex-row gap-8 mx-4 md:mx-[130px] mt-[100px]'>
                <CheckoutBillingForm />
                <CheckoutDetailSection />
            </div>
            <ShopBannerSection />
        </div>
    )
}

export default CheckoutPage