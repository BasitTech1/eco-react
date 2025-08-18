import React, { useRef } from 'react'
import BannerImg1 from '../assets/images/banner1.png'
import BannerImg2 from '../assets/images/banner2.png'
import BannerImg3 from '../assets/images/banner3.png'
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import Slider from 'react-slick';

const BannerSlider = () => {
    const bannerRef = useRef(null)
    const nextRef = () => {
        if (bannerRef.current) {
            bannerRef.current.slickNext()
        }
    }
    const prevRef = () => {
        if (bannerRef.current) {
            bannerRef.current.slickPrev()
        }
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    const bannerdetails = [
        {
            image: BannerImg1,
        },
        {
            image: BannerImg2,
        },
        {
            image: BannerImg3,
        }
    ]
    return (
        <div className='relative'>
            <div className='flex items-center'>
                <div className='absolute lg:top-[64%] lg:left-[7%] z-10 bg-[#03345D] text-white p-3 lg:text-[30px] lg:rounded-full cursor-pointer' onClick={prevRef}>
                    <IoArrowBackSharp />
                </div>
                <div className='absolute lg:top-[64%] lg:left-[87%] z-10 bg-[#03345D] text-white p-3 lg:text-[30px] lg:rounded-full cursor-pointer' onClick={nextRef}>
                    <IoMdArrowForward />
                </div>
            </div>
            <Slider {...settings} ref={bannerRef} className='lg:w-[80%] lg:ml-32 lg:mt-52'>
                {
                    bannerdetails.map((banner, index) => (
                        <div key={index}>
                            <div>
                                <img src={banner.image} alt="" />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default BannerSlider
