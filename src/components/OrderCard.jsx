import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import React from "react";
import { ShoppingCartContext } from "../context";

function OrderCard({ id, img, title, price }) {
  const { deleteProduct } = React.useContext(ShoppingCartContext);
  return (
    <div className="flex items-center gap-4">
      <div className="flex w-full gap-2 items-center">
        <figure className="w-20 h-20 flex-none">
          <img className="rounded-lg w-full h-full" src={img} alt={title} />
        </figure>
        <p className="w-full ">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-semibold text-lg">
          ${price} {id}
        </p>
        <XMarkIcon
          onClick={() => deleteProduct(id)}
          className="w-6 h-6 cursor-pointer transition-all duration-300 ease-out hover:scale-110"
        />
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderCard;