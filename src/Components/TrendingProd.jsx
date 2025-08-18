import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
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
import { Link } from 'react-router-dom';

const TrendingProd = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    const sliderRef = useRef(null);
    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }

    const TrendingProduct = [
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
        },
        {
            Image: ProductImg11,
            Title: 'Hp 17 Gen Laptop Hd Screen',
            Icon: <FaStar />,
            order: '(12)',
            price: '$600'
        },
        {
            Image: ProductImg12,
            Title: 'Clinque Cream Skin Anti-Rides',
            Icon: <FaStar />,
            order: '(4)',
            price: '$31'
        }
    ]
    return (
        <div>
            <div className='relative'>
                <div className='lg:ml-[95px] lg:mb-10 lg:text-[18px] font-semibold'>
                    <h2>Trending Products</h2>
                </div>

                <div className='flex'>
                    <div className='absolute lg:top-[50%] lg:left-28 bg-[#03345D] text-white lg:p-2 lg:text-3xl z-10 lg:rounded-full cursor-pointer' onClick={prevSlide}><IoArrowBackSharp /></div>
                    <div className='absolute lg:top-[50%] lg:left-[92%] bg-[#03345D] text-white lg:p-2 lg:text-3xl z-10 lg:rounded-full cursor-pointer' onClick={nextSlide}><IoArrowForwardOutline /></div>
                </div>
                <Slider {...settings} ref={sliderRef} className='lg:w-[85%] lg:ml-32'>
                    {
                        TrendingProduct.map((Prod, index) => (
                            <div key={index}>
                                <Link to="/ProductCategory">
                                    <div className='bg-gray-200 w-50 lg:p-4 lg:border-8 border-red-100 lg:rounded-3xl relative lg:ml-2 cursor-pointer hover:bg-gray-100 transition-all duration-100 ease-in'>
                                        <img src={Prod.Image} alt="" className='object-cover lg:p-4' />
                                        <h2 className='lg:mt-[-12px] lg:text-[28px] font-bold lg:leading-8'>{Prod.Title}</h2>
                                        <div className='flex items-center gap-2 text-red-500 lg:mt-2'>
                                            <p>{Prod.Icon}</p>
                                            <p>{Prod.Icon}</p>
                                            <p>{Prod.Icon}</p>
                                            <p>{Prod.Icon}</p>
                                            <p>{Prod.Icon}</p>
                                        </div>
                                        <span className='absolute font-semibold lg:top-[83.1%] lg:left-[70%]'>{Prod.order}</span>
                                        <h4 className='lg:mt-2 font-medium lg:text-xl'>$36</h4>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default TrendingProd
