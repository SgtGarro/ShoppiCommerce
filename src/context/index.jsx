import PropTypes from "prop-types";
import React from "react";

export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = function ({ children }) {
  // Shopping Cart · Products
  const [cart, setCart] = React.useState([]);

  // Shopping Cart · Quantity
  const counter = cart.length;

  // Shopping Cart · Add Products to cart
  const addProduct = function (product) {
    setCart([...cart, product]);
  };

  // Product Detail · Show Product
  const [productToShow, setProductToShow] = React.useState({});

  // Product Detail · Open/Close
  const [isProductOpen, setIsProductOpen] = React.useState(false);
  const openProductDetail = () => setIsProductOpen(true);
  const closeProductDetail = () => setIsProductOpen(false);
  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] =
    React.useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

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
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.element,
};
