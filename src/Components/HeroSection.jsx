import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowUp } from "react-icons/io";
import SliderImg1 from '../assets/images/heroslider1.png'
import SliderImg2 from '../assets/images/heroslider2.png'
import SliderImg3 from '../assets/images/heroslider3.png'
import { IoIosArrowDown } from "react-icons/io";
import JacketSlider from '../assets/images/JacketSlider.png'

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const HeroSlider = [
        {
            image1: SliderImg1,
            subtitle1: 'New Flash Bag',
            Title1: 'From $100',
            para1: 'Explore Over-Thinker board Bag Content CreationSee more ideas about photography bags, fashion layout, newsletter design.',
            b1: 'Order Now'
        },
        {
            image2: SliderImg2,
            subtitle2: 'New Flash Perfume',
            Title2: 'From $100',
            para2: 'Explore Over-Thinker board Bag Content CreationSee more ideas about photography bags, fashion layout, newsletter design.',
            b2: 'Order Now'
        },
        {
            image3: SliderImg3,
            subtitle3: 'New Flash shoes',
            Title3: 'From $100',
            para3: 'Explore Over-Thinker board Bag Content CreationSee more ideas about photography bags, fashion layout, newsletter design.',
            b3: 'Order Now'
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    return (
        <div className='flex items-start justify-center lg:gap-9 lg:mt-14'>
            <div className='lg:ml-14'>
                <div className='bg-[#021C35] text-white flex items-center gap-3 lg:p-2 cursor-pointer' onClick={toggleDropdown}>
                    <h1>All Categories</h1>
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {isOpen && (
                    <ul className='bg-[#021C35] text-gray-100 lg:mt-3 cursor-pointer lg:p-2'>
                        <li>Jacket</li>
                        <li>Clothes</li>
                        <li>Bags</li>
                        <li>Shoes</li>
                        <li>IT Accessories</li>
                    </ul>
                )}
            </div>

            <div className='w-full lg:w-[54.53%]'>
                <Slider {...settings}>
                    {HeroSlider.map((slide, index) => (
                        <div className=''>
                            <div>
                                <div>
                                    <img src={slide.image1} alt="" />
                                </div>
                                <div className='absolute lg:top-40 lg:ml-12'>
                                    <h4 className='text-white font-semibold text-[14px]'>{slide.subtitle1}</h4>
                                    <h1 className='text-white font-semibold text-8xl lg:ml-[-6px]'>{slide.Title1}</h1>
                                    <p className='text-gray-400 w-[55%] leading-5'>{slide.para1}</p>
                                    <p className='bg-white w-[15%] lg:px-2 text-[22px] font-semibold lg:mt-5 rounded-2xl cursor-pointer hover:bg-slate-300 transition-all duration-100'>{slide.b1}</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src={slide.image2} alt="" />
                                </div>
                                <div className='absolute lg:top-[30%] lg:ml-12'>
                                    <h4 className='text-[#03345D] font-semibold text-[14px] lg:ml-[-28px]'>{slide.subtitle2}</h4>
                                    <h1 className='text-[#03345D] font-semibold text-6xl lg:ml-[-33px]'>{slide.Title2}</h1>
                                    <h6 className='text-[#03345D] lg:mt-[14px] lg:w-[40%] lg:ml-[-28px]  leading-4'>{slide.para2}</h6>
                                    <p className='bg-[#03345D] text-white w-[15%] lg:px-2 text-[22px] font-semibold lg:mt-[-60px] lg:ml-[70%] rounded-2xl cursor-pointer hover:bg-[#003c6d] transition-all duration-100'>{slide.b2}</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src={slide.image3} alt="" />
                                </div>
                                <div className='absolute lg:top-[20%] lg:ml-[480px]'>
                                    <h4 className='text-[#03345D] lg:mb-[7px] font-semibold text-[14px] '>{slide.subtitle3}</h4>
                                    <h1 className='text-[#03345D] font-semibold text-6xl'>{slide.Title3}</h1>
                                    <h6 className='text-[#03345D] lg:mt-[10px] lg:w-[35%] leading-4'>{slide.para3}</h6>
                                    <p className='bg-[#03345D] text-white w-[15%] lg:px-2 text-[22px] font-semibold lg:mt-[10px]  rounded-2xl cursor-pointer hover:bg-[#003c6d] transition-all duration-100'>{slide.b3}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div>
                <img src={JacketSlider} alt="" />
            </div>
        </div>
    )
}

export default HeroSection
