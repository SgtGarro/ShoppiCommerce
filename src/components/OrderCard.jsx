import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

function OrderCard({
  img,
  title,
  price,
  quantity,
  handleDelete,
  handleIncrement,
  handleDecrement,
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex w-full gap-2 items-center">
        <figure className="w-20 h-20 flex-none">
          <img className="rounded-lg w-full h-full" src={img} alt={title} />
        </figure>
        <p className="w-full ">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-semibold text-lg">${price * quantity}</p>
        <div className="flex items-center gap-1">
          {handleDecrement && (
            <div
              className="cursor-pointer p-1 bg-red-500 text-white rounded-"
              onClick={handleDecrement}
            >
              <MinusIcon className="w-3 h-3" />
            </div>
          )}
          {handleIncrement && handleDecrement && <div>{quantity}</div>}
          {handleIncrement && (
            <div
              className="cursor-pointer p-1 bg-gray-700 text-white rounded-"
              onClick={handleIncrement}
            >
              <PlusIcon className="w-3 h-3" />
            </div>
          )}
        </div>
        {handleDelete && (
          <TrashIcon
            onClick={handleDelete}
            className="w-6 h-6 cursor-pointer transition-all duration-300 ease-out hover:scale-110"
          />
        )}
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handleDelete: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
};

export default OrderCard;
