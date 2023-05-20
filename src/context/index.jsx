import PropTypes from "prop-types";
import React from "react";

export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = function ({ children }) {
  const [cart, setCart] = React.useState([]);

  const counter = cart.length;

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.element,
};
