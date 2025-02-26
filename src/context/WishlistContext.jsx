import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // load wishlist from localstorage  on initial render
  useEffect(() => {
    const saveWishlist = JSON.parse(localStorage.getItem('wishlist'));
    if (saveWishlist) {
      setWishlist(saveWishlist);
    }
  }, [])

  // save wishlist to localstorage whnever changes it 
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
  },[wishlist])

  const addToWishList = (item) => {
    setWishlist((prev) => {
      if (!prev.some((prevItem) => prevItem.id === item.id)) {
        return [...prev, item]
      }
      return prev;
    }); // Add item to wishlist
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== itemId)); // Remove item from wishlist
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishList, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired, // ✅ Correct type for React children
};