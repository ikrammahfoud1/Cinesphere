// WishList.js
import React, { createContext, useState } from "react";

// Create Context
const WishList = createContext();

export const WishListrovider = ({ children }) => {
  const [wishList, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist") || "[]")
  );

  const isLiked = (id) => wishList.includes(id);
  const handleWishListIconClick = (id) => {
    if (!isLiked(id)) {
      const newList = [...wishList, id];
      setWishlist(newList);
      return localStorage.setItem("wishlist", JSON.stringify(newList));
    }
    const newList = wishList.filter((elem) => elem !== id);
    setWishlist(newList);
    localStorage.setItem("wishlist", JSON.stringify(newList));
  };

  return (
    <WishList.Provider value={{ handleWishListIconClick, wishList, isLiked }}>
      {children}
    </WishList.Provider>
  );
};

export default WishList;
