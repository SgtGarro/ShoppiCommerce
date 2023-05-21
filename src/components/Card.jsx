import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import React from "react";
import { ShoppingCartContext } from "../context";
function Card({ data }) {
  const {
    addProduct,
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    cart,
  } = React.useContext(ShoppingCartContext);

  const isInCart = function () {
    return cart.findIndex((product) => product.id === data.id) !== -1;
  };

  const showProduct = function (event) {
    const btn = event.target.closest(".btn--add");
    if (btn) return;
    setProductToShow(data);
    openProductDetail();
    closeCheckoutSideMenu();
  };

  const onAddToCart = function (data) {
    if (isInCart()) return;
    addProduct({ ...data, quantity: 1 });
    openCheckoutSideMenu();
    closeProductDetail();
  };

  const renderIcon = function () {
    if (isInCart())
      return (
        <button
          type="button"
          className="btn--add absolute top-2 right-2 p-1 bg-gray-800 rounded-full transition-all duration-300 ease-out hover:scale-110"
          onClick={() => onAddToCart(data)}
        >
          <CheckIcon className="w-5 h-5 text-white" />
        </button>
      );
    else
      return (
        <button
          type="button"
          className="btn--add absolute top-2 right-2 p-1 bg-white rounded-full transition-all duration-300 ease-out hover:scale-110"
          onClick={() => onAddToCart(data)}
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      );
  };

  return (
    <div className="w-full min-h-[15rem] h-fit bg-white">
      <figure
        className="relative w-full h-4/5 cursor-pointer"
        onClick={showProduct}
      >
        <img
          className="rounded-lg w-full h-full object-cover"
          src={data.images[0]}
          alt={data.title}
        />
        <span className="absolute left-2 bottom-2 text-sm bg-gray-100 px-3 rounded-md font-bold">
          {data.categoryName}
        </span>
        {renderIcon()}
      </figure>
      <div className="flex mt-2 items-start justify-between gap-2">
        <span className="font-normal">{data.title}</span>
        <span className="font-bold text-lg">${data.price}</span>
      </div>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
