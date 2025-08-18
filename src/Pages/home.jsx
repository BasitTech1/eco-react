import React from 'react'
import Header from '../Components/Header'
import { IoIosArrowForward } from "react-icons/io";
import Profile1 from '../assets/images/catImg1.png'
import Profile2 from '../assets/images/catImg2.png'
import Profile3 from '../assets/images/catImg3.png'
import Profile4 from '../assets/images/catImg4.png'
import Profile5 from '../assets/images/catImg5.png'
import Profile6 from '../assets/images/catImg6.png'
import HeroSection from '../Components/HeroSection';
import TrendingProd from '../Components/TrendingProd';
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
import { IoArrowForwardOutline } from "react-icons/io5";
import BrandImg1 from '../assets/images/BrandImg1.png'
import BrandImg2 from '../assets/images/BrandImg2.png'
import BrandImg3 from '../assets/images/BrandImg3.png'
import BrandImg4 from '../assets/images/BrandImg4.png'
import BrandImg5 from '../assets/images/BrandImg5.png'
import BrandImg6 from '../assets/images/BrandImg6.png'
import BannerSlider from '../Components/BannerSlider';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
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
      <Header />

      {/* -----Hero section---- */}
      <HeroSection />

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

      {/* ------Trending Products---------- */}
      <TrendingProd />

      {/* --------Health Section------- */}

      <div>
        <div className='lg:ml-[95px] lg:mb-10 lg:mt-44 lg:text-[18px] font-semibold'>
          <h2>Health</h2>
        </div>
        <div className='lg:ml-16 grid lg:grid-cols-5 lg:w-[90%] lg:gap-2'>
          {
            TrendingProduct.map((Prod, index) => (
              <Link to="/ProductCategory">
                <div key={index} className='bg-slate-50 lg:w-38 lg:p-4 lg:border-8 border-[#03355d24] lg:rounded-3xl lg:ml-4 relative cursor-pointer hover:bg-[#90cdff33] transition-all duration-100 ease-in'>
                  <img src={Prod.Image} alt="" className='object-cover lg:p-2' />
                  <h2 className='lg:mt-[-8px] lg:text-[20px] font-bold lg:leading-4'>{Prod.Title}</h2>
                  <div className='flex items-center gap-2 text-red-500 lg:mt-2'>
                    <p>{Prod.Icon}</p>
                    <p>{Prod.Icon}</p>
                    <p>{Prod.Icon}</p>
                    <p>{Prod.Icon}</p>
                    <p>{Prod.Icon}</p>
                  </div>
                  <span className='absolute font-semibold lg:top-[76.8%] lg:left-[70%]'>{Prod.order}</span>
                  <h4 className='lg:mt-2 font-medium lg:text-xl'>$36</h4>
                </div>
              </Link>
            ))
          }
        </div>
        <button className='flex items-center justify-center lg:ml-[48%] lg:mt-20 font-semibold lg:gap-2'>
          <h4>View All</h4>
          <p><IoArrowForwardOutline /></p>
        </button>
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

      {/* -------------Banner Section--------- */}
      <BannerSlider />


      {/* ----------Footer--------- */}
      <Footer />
    </div>
  )
}

export default Home
