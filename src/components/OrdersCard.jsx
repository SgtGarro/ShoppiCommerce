import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

function OrdersCard({ date, totalPrice, totalProducts }) {
  return (
    <div className="flex items-center gap-16 border border-gray-800 px-4 py-3 rounded-lg">
      <div className="w-full">
        <p className="font-medium">{date}</p>
        <p className="text-sm">
          {totalProducts} article{totalProducts > 1 && "s"}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-bold text-lg">${totalPrice}</p>
        <ChevronRightIcon className="w-6 h-6" />
      </div>
    </div>
  );
}

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default OrdersCard;
