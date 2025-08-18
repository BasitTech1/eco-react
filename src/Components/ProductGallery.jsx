import React, { useState } from 'react';
import ProductImg1 from '../assets/images/ProductImg1.png';
import ProductImg2 from '../assets/images/ProductImg2.png';
import ProductImg3 from '../assets/images/ProductImg3.png';
import ProductImg4 from '../assets/images/ProductImg4.png';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { IoStarSharp } from "react-icons/io5";
import { useCart } from '../Pages/CartContext';

const ProductGallery = () => {
    const [mainImage, setMainImage] = useState(ProductImg1);
    const [wishlisted, setWishlisted] = useState(false);
    const [selectedColor, setSelectedColor] = useState('Red');
    const [selectedSize, setSelectedSize] = useState('M');
    const { addToCart } = useCart();

    const thumbnailImages = [
        { id: 1, src: ProductImg1 },
        { id: 2, src: ProductImg2 },
        { id: 3, src: ProductImg3 },
        { id: 4, src: ProductImg4 }
    ];

    const colors = ['Red', 'Yellow', 'Pink', 'Grey'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    const handleAddToCart = () => {
        const cartItem = {
            ...product,
            quantity: 1,
            selectedColor,
            selectedSize
        };
        addToCart(cartItem);
        alert(`${product.name} added to cart`);
    };

    return (
        <div className='lg:mt-28 flex items-center justify-center lg:gap-26 lg:px-16 relative'>
            <div className='flex items-center justify-center lg:gap-6 lg:w-[50%]'>
                <div className='lg:w-[17%] flex flex-col lg:gap-2'>
                    {thumbnailImages.map((image) => (
                        <img
                            key={image.id}
                            src={image.src}
                            alt={`Thumbnail ${image.id}`}
                            className={`bg-gray-200 p-2 cursor-pointer ${mainImage === image.src ? 'ring-2 ring-[#03345D]' : ''}`}
                            onClick={() => setMainImage(image.src)}
                        />
                    ))}
                </div>
                <div className='bg-gray-50 lg:p-6 lg:w-[71%] relative'>
                    <img src={mainImage} alt="Main product" className='lg:w-[100%]' />
                    <div className='flex items-center absolute lg:gap-2 lg:top-5 lg:left-[77%]'>
                        <button
                            className='bg-[#03345D] lg:p-2 rounded-full text-white cursor-pointer'
                            onClick={() => setWishlisted(!wishlisted)}
                        >
                            {wishlisted ? <FaHeart className="text-white" /> : <FaRegHeart />}
                        </button>
                        <button className='bg-[#03345D] lg:p-2 rounded-full text-white cursor-pointer'>
                            <FiUpload />
                        </button>
                    </div>
                </div>
            </div>
            <div className='lg:w-[50%]'>
                <div>
                    <h1 className='lg:text-7xl font-bold'>PONDS</h1>
                    <p className='lg:text-[50px] lg:leading-none'>Skin institute Age Miracle Ultimate Youth Day Cream</p>
                    <div className='flex items-center lg:gap-3 lg:mt-4 text-xl text-gray-400'>
                        <IoStarSharp className="text-yellow-400" />
                        <p>4.9 (2.6k)</p>
                    </div>
                </div>
                <div className='flex items-center list-none lg:gap-4 lg:mt-6'>
                    {colors.map((color) => (
                        <li
                            key={color}
                            className={`lg:px-8 font-medium cursor-pointer transition-all duration-75 ease-in lg:rounded-[6px] border-2 ${selectedColor === color
                                ? 'bg-[#03345D] text-white border-[#03345D]'
                                : 'bg-gray-100 border-[#03355d0f] hover:bg-gray-200'
                                }`}
                            onClick={() => setSelectedColor(color)}
                        >
                            {color}
                        </li>
                    ))}
                </div>
                <div className='lg:mt-7'>
                    <h2 className='text-6xl'><span className='lg:text-[20px] font-medium'>From</span> $36</h2>
                    <p className='lg:text-[26px] font-medium text-gray-500'>As Low as $12/mo with DSM</p>
                </div>

                <div className='lg:mt-7'>
                    <h2 className='lg:text-xl font-medium'>Select Size</h2>
                    <div className='flex items-center list-none gap-4 lg:mt-3'>
                        {sizes.map((size) => (
                            <li
                                key={size}
                                className={`lg:px-3 text-white lg:rounded-[6px] transition-all duration-100 ease-in cursor-pointer ${selectedSize === size
                                    ? 'bg-[#03345D] hover:bg-[#024780]'
                                    : 'bg-gray-400 hover:bg-gray-500'
                                    }`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </li>
                        ))}
                    </div>
                </div>
                <button className='lg:mt-6 bg-[#03345D] lg:px-[137px] lg:py-2 lg:text-xl lg:rounded-[10px] text-white font-medium hover:bg-[#024780] transition-all duration-100 ease-in' onClick={handleAddToCart}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductGallery;