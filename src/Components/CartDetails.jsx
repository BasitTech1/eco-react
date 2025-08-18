import React, { useState } from 'react';
import { FiShoppingCart, FiX, FiCheck } from 'react-icons/fi';

const CartDetails = () => {
  // Sample cart items data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Ponds',
      description: 'Skin Institute Age Mirage Ultimate Youth Day Cream',
      inStock: true,
      freeDelivery: false,
      freeShipping: true,
      price: 36,
      quantity: 1
    },
    {
      id: 2,
      name: 'Fruit',
      description: '1kg Pack',
      inStock: true,
      freeDelivery: true,
      freeShipping: true,
      price: 12,
      quantity: 1
    },
    {
      id: 3,
      name: 'Clinique',
      description: 'Skin Institute Age Mirage Ultimate Youth Day Cream',
      inStock: true,
      freeDelivery: true,
      freeShipping: true,
      price: 67,
      quantity: 1
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Calculate order summary
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = 20;
  const savings = appliedCoupon ? 110 : 0;
  const total = subtotal + shippingCost - savings;

  // Coupon codes and their discounts
  const coupons = [
    { code: 'SAVE20', discount: 20 },
    { code: 'SAVE50', discount: 50 },
    { code: 'FREESHIP', discount: shippingCost }
  ];

  const applyCoupon = () => {
    const validCoupon = coupons.find(coupon => coupon.code === couponCode);
    if (validCoupon) {
      setAppliedCoupon(validCoupon);
      // Update savings based on applied coupon
      // In this example, we're using fixed $110 savings for demo
    } else {
      alert('Invalid coupon code');
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <FiShoppingCart className="mr-2" /> Shopping Cart
      </h1>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.map(item => (
          <div key={item.id} className="border-b pb-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className={`text-sm ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {item.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
              <button 
                onClick={() => removeItem(item.id)}
                className="text-gray-500 hover:text-red-500"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center border rounded">
                <button 
                  className="px-3 py-1 text-lg"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button 
                  className="px-3 py-1 text-lg"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <span className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
            </div>

            <div className="mt-2 space-y-1">
              <div className="flex items-center">
                {item.freeDelivery ? (
                  <FiCheck className="text-green-500 mr-2" />
                ) : (
                  <input type="checkbox" className="mr-2" checked={item.freeDelivery} readOnly />
                )}
                <span>Free 30-day Delivery</span>
              </div>
              <div className="flex items-center">
                {item.freeShipping ? (
                  <FiCheck className="text-green-500 mr-2" />
                ) : (
                  <input type="checkbox" className="mr-2" checked={item.freeShipping} readOnly />
                )}
                <span>Free Shipping</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        
        <div className="mb-4">
          <div className="flex mb-2">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="flex-1 border rounded-l px-4 py-2"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button 
              onClick={applyCoupon}
              className="bg-[#03345D] text-white px-4 py-2 rounded-r hover:bg-[#013a69]"
            >
              Apply
            </button>
          </div>
          {appliedCoupon && (
            <p className="text-green-600 text-sm">
              Coupon "{appliedCoupon.code}" applied! (Save ${appliedCoupon.discount})
            </p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Items ({cartItems.length})</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Your Savings</span>
            <span>-${savings.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
            <span>SubTotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button className="w-full mt-6 bg-[#03345D] text-white py-3 rounded-lg hover:bg-[#013a69] font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDetails;