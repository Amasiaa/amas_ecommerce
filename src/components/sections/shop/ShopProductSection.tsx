import ProductCard from '@/components/cards/ProductCard'
import React from 'react'

function ShopProductSection() {
  const data = [
        {
            id: "10",
            imageUrl: "/images/p_1.png",
            title: "Syltherine",
            description: "Stylish cafe chaire",
            price: "2.500.000",
            otherPrice: "3.500.000",
            type: "DISCOUNTED",
            typeValue: "-30%"
        },
        {
            id: "11",
            imageUrl: "/images/p_2.png",
            title: "Leviosa",
            description: "Stylish cafe chaire",
            price: "2.500.000",
            otherPrice: "3.500.000",
            type: "DISCOUNTED",
            typeValue: "-30%"
        },
        {
            id: "12",
            imageUrl: "/images/p_3.png",
            title: "Lolito",
            description: "Luxury big sofa",
            price: "7.000.000",
            otherPrice: "14.000.000",
            type: "DISCOUNTED",
            typeValue: "-50%"
        },
        {
            id: "3",
            imageUrl: "/images/p_4.png",
            title: "Respira",
            description: "Outdoor bar table stool",
            price: "500.000",
            otherPrice: "",
            type: "NEW",
            typeValue: "New"
        },
        {
            id: "14",
            imageUrl: "/images/p_5.png",
            title: "Grifo",
            description: "Night lamp",
            price: "1.500.000",
            otherPrice: "",
            type: "NORMAL",
            typeValue: ""
        },
        {
            id: "15",
            imageUrl: "/images/p_6.png",
            title: "Muggo",
            description: "Small mug",
            price: "150.000",
            otherPrice: "",
            type: "NEW",
            typeValue: "New"
        },
        {
            id: "16",
            imageUrl: "/images/p_7.png",
            title: "Pingky",
            description: "Cute bed set",
            price: "7.000.000",
            otherPrice: "14.000.000",
            type: "DISCOUNTED",
            typeValue: "-50%"
        },
        {
            id: "17",
            imageUrl: "/images/p_8.png",
            title: "Potty",
            description: "Minimalist flower pot",
            price: "500.000",
            otherPrice: "",
            type: "NEW",
            typeValue: "New"
        },
        {
            id: "18",
            imageUrl: "/images/p_1.png",
            title: "Syltherine",
            description: "Stylish cafe chaire",
            price: "2.500.000",
            otherPrice: "3.500.000",
            type: "DISCOUNTED",
            typeValue: "-30%"
        },
        {
            id: "19",
            imageUrl: "/images/p_2.png",
            title: "Leviosa",
            description: "Stylish cafe chaire",
            price: "2.500.000",
            otherPrice: "3.500.000",
            type: "DISCOUNTED",
            typeValue: "-30%"
        },
        {
            id: "20",
            imageUrl: "/images/p_3.png",
            title: "Lolito",
            description: "Luxury big sofa",
            price: "7.000.000",
            otherPrice: "14.000.000",
            type: "DISCOUNTED",
            typeValue: "-50%"
        },
        {
            id: "21",
            imageUrl: "/images/p_4.png",
            title: "Respira",
            description: "Outdoor bar table stool",
            price: "500.000",
            otherPrice: "",
            type: "NEW",
            typeValue: "New"
        },
        {
            id: "22",
            imageUrl: "/images/p_5.png",
            title: "Grifo",
            description: "Night lamp",
            price: "1.500.000",
            otherPrice: "",
            type: "NORMAL",
            typeValue: ""
        },
        {
            id: "23",
            imageUrl: "/images/p_6.png",
            title: "Muggo",
            description: "Small mug",
            price: "150.000",
            otherPrice: "",
            type: "NEW",
            typeValue: "New"
        },
        {
            id: "24",
            imageUrl: "/images/p_7.png",
            title: "Pingky",
            description: "Cute bed set",
            price: "7.000.000",
            otherPrice: "14.000.000",
            type: "DISCOUNTED",
            typeValue: "-50%"
        },
        {
            id: "25",
            imageUrl: "/images/p_8.png",
            title: "Potty",
            description: "Minimalist flower pot",
            price: "500.000",
            otherPrice: "",
            type: "NEW",
            typeValue: "New"
        },
    ]
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-[32px] mt-[46px]'>
        {data.map((item, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </div>
    </section>
  )
}

export default ShopProductSection