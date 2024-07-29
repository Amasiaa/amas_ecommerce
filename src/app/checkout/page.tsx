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
            <div className='mx-4 md:mx-[130px]'>
                <CheckoutBillingForm />
                <CheckoutDetailSection />
            </div>
            <ShopBannerSection />
        </div>
    )
}

export default CheckoutPage