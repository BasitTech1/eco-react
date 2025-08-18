import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/ecoLogo.png'
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className='flex items-center justify-between lg:px-12 lg:mt-5'>
            <div className='cursor-pointer'>
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className='flex lg:w-100 relative'>
                <input type="text" placeholder='Search for any Product' className='border-none outline-none bg-gray-300 lg:py-2 lg:pr-28 lg:pl-2 rounded-2xl text-[14px] font-semibold' />
                <p className='absolute lg:left-[90%] lg:top-[5px] lg:text-[18px] lg:p-[3px] bg-[#021C35] text-white rounded-xl cursor-pointer'><IoSearch /></p>
            </div>
            <div className='flex items-center justify-center gap-8 cursor-pointer'>
                <div className='flex items-center'>
                    <p className='lg:text-3xl'><IoLocationOutline /></p>
                    <p className='leading-none'>Delivering To <br /> <span className='font-bold'>London</span></p>
                </div>
                <Link to="/AddToCart">
                    <div className='flex items-center'>
                        <p className='lg:text-3xl'><IoCartOutline /></p>
                        <p className='text-2xl'>Cart</p>
                    </div>
                </Link>
                <div className='flex items-center'>
                    <p className='lg:text-2xl'><CgProfile /></p>
                    <p className='text-2xl'>SignUp</p>
                </div>
            </div>
        </div>
    )
}

export default Header
