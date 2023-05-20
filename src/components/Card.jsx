import PropTypes from "prop-types";
import React from "react";
import { ShoppingCartContext } from "../context";
function Card({ data }) {
  const { addProduct, cart } = React.useContext(ShoppingCartContext);
  return (
    <div className="w-full min-h-[15rem] h-fit bg-white">
      <figure className="relative w-full h-4/5 cursor-pointer">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={data.images[0]}
          alt={data.title}
        />
        <span className="absolute left-2 bottom-2 text-sm bg-gray-100 px-3 rounded-md font-bold">
          {data.categoryName}
        </span>
        <button
          type="button"
          className="absolute top-2 right-2 p-1 bg-white rounded-full"
          onClick={() => {
            addProduct(data);
            console.log(cart);
          }}
        >
          <span className="leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>
        </button>
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
