import PropTypes from "prop-types";
import React from "react";

export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = function ({ children }) {
  // Shopping Cart · Products
  const [cart, setCart] = React.useState([]);

  // Shopping Cart · Quantity
  const counter = cart.length;

  // Product Detail · Open/Close
  const [isProductOpen, setIsProductOpen] = React.useState(false);
  const openProductDetail = () => setIsProductOpen(true);
  const closeProductDetail = () => setIsProductOpen(false);

  // Product Detail · Show Product
  const [productToShow, setProductToShow] = React.useState({});

  // Shopping Cart · Add Products to array
  const addProduct = function (product) {
    const newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addProduct,
        counter,
        cart,
        isProductOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.element,
};
