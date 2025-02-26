import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

    // Add a product to the cart
    const addToCart = (product, quantity) => {
      setCart((prev) => {
        const existingItem = prev.find((item) => item.id === product.id);
        if (existingItem) {
          // If the item already exists, update the quantity
          return prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          );
        } else {
          // If the item doesn't exist, add it to the cart
          return [...prev, { ...product, quantity }];
        }
      });
    };
  
    // Remove a product from the cart
    const removeFromCart = (itemId) => {
      setCart((prev) => prev.filter((item) => item.id !== itemId));
    };
 
    const Checkout = () => {
      setCart([]);
    }
    // Calculate the total number of items in the cart
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, Checkout }}>
        {children}
      </CartContext.Provider>
    );
}