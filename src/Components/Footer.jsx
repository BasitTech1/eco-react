import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaWalletSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Playstore from "../assets/images/Playstore.png"
import Apple from "../assets/images/Apple.png"

const Footer = () => {
    return (
        <div className='bg-[#021C35] lg
    mt-36'>
            <div className='lg:ml-12 flex items-center justify-center lg:gap-16 text-[#021C35]'>
                <div className='flex items-center justify-center bg-white lg:w-54 p-4 lg:mt-24 lg:gap-3'>
                    <div className='lg:text-[45px] font-bold'>
                        <CiDeliveryTruck />
                    </div>
                    <div className='lg:leading-none'>
                        <h2 className='lg:text-xl font-bold'>Free-in-store pick up</h2>
                        <p className='lg:text-[15px]'>24/7 hour service</p>
                    </div>
                </div>

                <div className='flex items-center justify-center bg-white lg:w-54 lg:mt-24 lg:gap-3 lg:w-54 p-4'>
                    <div className='lg:text-[45px] font-semibold'>
                        <LiaWalletSolid />
                    </div>
                    <div className='lg:leading-none'>
                        <h2 className='lg:text-xl font-bold'>Free Shipping</h2>
                        <p className='lg:text-[15px]'>24/7 hour service</p>
                    </div>
                </div>

                <div className='flex items-center justify-center bg-white lg:w-54 lg:mt-24 lg:gap-3 lg:w-54 p-4'>
                    <div className='lg:text-[45px] font-medium'>
                        <MdOutlinePayments />
                    </div>
                    <div className='leading-none'>
                        <h2 className='lg:text-xl font-bold'>Flexible Payment</h2>
                        <p className='lg:text-[15px]'>24/7 Amazing service</p>
                    </div>
                </div>

                <div className='flex items-center justify-center bg-white lg:w-54 lg:mt-24 lg:gap-3 lg:w-54 p-4'>
                    <div className='lg:text-[45px] font-semibold'>
                        <TfiHeadphoneAlt />
                    </div>
                    <div className='leading-none'>
                        <h2 className='lg:text-xl font-bold'>Convenient help</h2>
                        <p className='lg:text-[15px]'>24/7 hour service</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center lg:mt-20 gap-40'>
                <div>
                    <h4 className='lg:text-xl text-white font-semibold'>About Eco</h4>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Company Info</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>News</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Investor</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Careers</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Policies</p>
                </div>

                <div>
                    <h4 className='lg:text-xl text-white font-semibold'>Order & Purchase</h4>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Check Order Status</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Shipping Delivery & Pickup</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Returns & Exchange</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Product Recalls</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Gift Cards</p>
                </div>

                <div>
                    <h4 className='lg:text-xl text-white font-semibold'>Popular Categories</h4>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Jacket</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Dresses</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>IT Accesssories</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Shoes</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Bags</p>
                </div>

                <div>
                    <h4 className='lg:text-xl text-white font-semibold'>Support & Services</h4>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Seller Center</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Contact Us</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>eBay Returns</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Complain</p>
                    <p className='text-gray-300 lg:text-[17px] hover:text-gray-100 cursor-pointer'>Product Quality</p>
                </div>
            </div>

            <div className=''>
                <div className='flex items-center justify-center lg:mt-12'>
                    <h2 className='lg:text-xl font-semibold text-white'>Download Our App</h2>
                </div>
                <div className='flex items-center justify-center lg:mt-8 bg-gray-50 lg:w-[30%] lg:ml-[35%] lg:gap-3 lg:px-[120px] lg:py-3 lg:rounded-xl'>
                    <img src={Playstore} alt="" />
                    <img src={Apple} alt="" />
                </div>
            </div>

            <div className='text-gray-300 flex items-center justify-between lg:mx-40 lg:mt-10'>
                <div>
                    <h2 className='lg:text-xl font-semibold'>&copy; ecoweb 2025 All Rights</h2>
                </div>
                <div className='flex items-center justify-between gap-10 '>
                    <h2 className='cursor-pointer hover:text-gray-100'>Terms & Condition</h2>
                    <h2 className='cursor-pointer hover:text-gray-100'>Privacy Policy</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer
