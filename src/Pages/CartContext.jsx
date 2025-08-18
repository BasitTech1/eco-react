// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id && 
                item.selectedColor === product.selectedColor && 
                item.selectedSize === product.selectedSize);
            
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id && 
                    item.selectedColor === product.selectedColor && 
                    item.selectedSize === product.selectedSize
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, product];
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);