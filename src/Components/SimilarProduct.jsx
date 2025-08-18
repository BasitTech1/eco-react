import React from 'react'
import ProductImg1 from '../assets/images/ProductImg1.png'
import ProductImg2 from '../assets/images/ProductImg2.png'
import ProductImg3 from '../assets/images/ProductImg3.png'
import ProductImg4 from '../assets/images/ProductImg4.png'
import ProductImg5 from '../assets/images/ProductImg5.png'
import ProductImg7 from '../assets/images/ProductImg7.png'
import ProductImg8 from '../assets/images/ProductImg8.png'
import ProductImg10 from '../assets/images/ProductImg10.png'
import ProductImg11 from '../assets/images/ProductImg11.png'
import ProductImg12 from '../assets/images/ProductImg12.png'
import { FaStar } from "react-icons/fa";

const SimilarProduct = () => {
    const similarProduct = [
        {
          Image: ProductImg1,
          Title: 'Ponds Cream Dry Skin',
          Icon: <FaStar />,
          order: '(28)',
          price: '$36'
        },
        {
          Image: ProductImg2,
          Title: 'Shakesperre Book Nowel',
          Icon: <FaStar />,
          order: '(8)',
          price: '$100'
        },
        {
          Image: ProductImg3,
          Title: 'Clinque Cream Skin Anti-rides',
          Icon: <FaStar />,
          order: '(2)',
          price: '$40'
        },
        {
          Image: ProductImg4,
          Title: 'Infinx Mobile 16Gb Ram 268Gb',
          Icon: <FaStar />,
          order: '(28)',
          price: '$316'
        },
        {
          Image: ProductImg5,
          Title: 'Skecher Shoes Pair Unlimited Stock',
          Icon: <FaStar />,
          order: '(21)',
          price: '$101'
        },
        {
          Image: ProductImg7,
          Title: 'Women Suit 2pcs unlimited Socks',
          Icon: <FaStar />,
          order: '(5)',
          price: '$36'
        },
        {
          Image: ProductImg8,
          Title: 'Earpods High Resolution Hd',
          Icon: <FaStar />,
          order: '(3)',
          price: '$102'
        },
        {
          Image: ProductImg10,
          Title: 'Fruits Pack 1Kg unlimited Stock',
          Icon: <FaStar />,
          order: '(25)',
          price: '$90'
        }
      ]
  return (
    <div className='grid grid-cols-4 lg:p-24 lg:gap-4 '>
      {
        similarProduct.map((compare, index) =>(
            <div key={index} className='bg-[#f6f1f1] lg:border-4 border-[#03355db6] lg:rounded-xl lg:p-6 relative hover:bg-[#ffff] transition-all duration-100 ease-out cursor-pointer'>
                <div className=''>
                    <img src={compare.Image} alt="" />
                </div>
                <div>
                    <h2 className='lg:text-3xl font-semibold lg:leading-none'>{compare.Title}</h2>
                </div>
                <div className='flex items-center gap-2 lg:mt-2'>
                    {compare.Icon}
                    {compare.Icon}
                    {compare.Icon}
                    {compare.Icon}
                    {compare.Icon}
                </div>
                <span className='absolute lg:top-[82%] lg:left-[76%]'>{compare.order}</span>
                <h4 className='lg:text-xl lg:mt-2 font-semibold'>{compare.price}</h4>
            </div>
        ))
      }
    </div>
  )
}

export default SimilarProduct
