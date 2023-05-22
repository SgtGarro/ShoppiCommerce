import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import React from "react";
import { ShoppingCartContext } from "../context";
import { totalPrice } from "../utils";
import OrderCard from "./OrderCard";
function CheckoutSideMenu() {
  const {
    cart,
    setCart,
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    order,
    setOrder,
    deleteProduct,
    incrementProduct,
    decrementProduct,
  } = React.useContext(ShoppingCartContext);

  const handleCheckout = function () {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: cart,
      totalProducts: cart.length,
      totalPrice: totalPrice(cart),
    };

    setOrder([...order, orderToAdd]);
    setCart([]);
    closeCheckoutSideMenu();
  };
  return (
    <aside
      className={`max-w-md w-5/12 fixed top-16 p-6 right-0 bg-white h-[calc(100vh-4rem)] border-gray-500 border rounded-lg transition-all duration-500 ease-out flex flex-col gap-6 ${
        isCheckoutSideMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">My Orders</h2>
        <div onClick={closeCheckoutSideMenu}>
          <XMarkIcon className="w-6 h-6 cursor-pointer transition-all duration-300 ease-out hover:scale-125" />
        </div>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto h-full">
        {cart.map((product) => (
          <OrderCard
            key={product.id}
            price={product.price}
            title={product.title}
            img={product.images?.[0]}
            quantity={product.quantity}
            handleDecrement={() => decrementProduct(product.id)}
            handleIncrement={() => incrementProduct(product.id)}
            handleDelete={() => deleteProduct(product.id)}
          />
        ))}
      </div>
      <div className="flex justify-between items-center gap-4">
        <p className="font-medium text-lg">Total:</p>
        <p className="font-bold text-xl">${totalPrice(cart)}</p>
      </div>
      <Link to="/my-orders/last">
        <button
          className="bg-gray-900 w-full inline-block py-3 text-lg text-white rounded-lg"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
}

export default CheckoutSideMenu;
