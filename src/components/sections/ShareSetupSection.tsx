import React from 'react'

function ShareSetupSection() {
    const data = [
        {
            imageUrl: "/images/btr_1.png",
            title: "Dining"
        },
        {
            imageUrl: "/images/btr_2.png",
            title: "Living"
        },
        {
            imageUrl: "/images/btr_3.png",
            title: "Bedroom"
        }
    ]
    return (
        <section>
            <div>
                <p className='text-[32px] font-bold text-center'>Share your setup with</p>
                <p className='text-20 text-customGray text-center'>
                    #AmasFurniture
                </p>
            </div>
            <div className=''>
                <img src='/images/share_your_setup.png' alt='share setup' className='w-full' />
            </div>
        </section>
    )
}

export default ShareSetupSection