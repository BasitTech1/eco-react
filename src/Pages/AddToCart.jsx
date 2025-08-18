import React from 'react'
import Header from '../Components/Header'
import { IoIosArrowForward } from "react-icons/io";
import Profile1 from '../assets/images/catImg1.png'
import Profile2 from '../assets/images/catImg2.png'
import Profile3 from '../assets/images/catImg3.png'
import Profile4 from '../assets/images/catImg4.png'
import Profile5 from '../assets/images/catImg5.png'
import Profile6 from '../assets/images/catImg6.png'
import BrandImg1 from '../assets/images/BrandImg1.png'
import BrandImg2 from '../assets/images/BrandImg2.png'
import BrandImg3 from '../assets/images/BrandImg3.png'
import BrandImg4 from '../assets/images/BrandImg4.png'
import BrandImg5 from '../assets/images/BrandImg5.png'
import BrandImg6 from '../assets/images/BrandImg6.png'
import Footer from '../Components/Footer';
import SimilarProduct from '../Components/SimilarProduct';
import CartDetails from '../Components/CartDetails';


const AddToCart = () => {

    return (
        <div>
            <Header />

            {/* -----Explore Categories------ */}

            <div className='lg:p-20'>
                <div className='flex items-center justify-between'>
                    <div className='lg:text-xl font-semibold'>
                        <h2>Explore Popular Categories</h2>
                    </div>
                    <div className='flex items-center gap-2 lg:text-[18px] font-semibold cursor-pointer'>
                        <h3>View All</h3>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className='flex items-center justify-center lg:gap-24 lg:mt-12'>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <img src={Profile1} alt="" />
                        <h2>Jacket</h2>
                    </div>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <img src={Profile2} alt="" />
                        <h2>Clocthes</h2>
                    </div>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <img src={Profile3} alt="" />
                        <h2>Bags</h2>
                    </div>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <img src={Profile4} alt="" />
                        <h2>Shoes</h2>
                    </div>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <img src={Profile5} alt="" />
                        <h2>IT Accessories</h2>
                    </div>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <img src={Profile6} alt="" />
                        <h2>Glasses</h2>
                    </div>
                </div>
            </div>

            {/* -----------Shopping Cart----------- */}

            <div>
                <CartDetails/>
            </div>

            {/* ---------compare with similar product---------- */}

            <div>
                <div className='flex items-center justify-center lg:mt-32'>
                    <h2 className='lg:text-xl font-semibold'>Compare with Similar Products</h2>
                </div>
                <SimilarProduct />
            </div>

            {/* ----------Official------- */}
            <div className='flex flex-col items-center justify-center lg:mt-32'>
                <div className='lg:text-2xl font-semibold'>
                    <h2>Official Brand Stores</h2>
                </div>
                <div className='flex items-center justify-center gap-14 w-24 lg:mt-10'>
                    <img src={BrandImg1} alt="" />
                    <img src={BrandImg2} alt="" />
                    <img src={BrandImg3} alt="" />
                    <img src={BrandImg4} alt="" />
                    <img src={BrandImg5} alt="" />
                    <img src={BrandImg6} alt="" />
                </div>
            </div>

            {/* ----------Footer--------- */}
            <Footer />
        </div>
    )
}

export default AddToCart
