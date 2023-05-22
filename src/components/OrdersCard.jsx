import PropTypes from "prop-types";

function OrdersCard({ date, totalPrice, totalProducts }) {
  return (
    <div className="flex items-center gap-4 border border-gray-800 px-4 py-3">
      <p>{date}</p>
      <p>{totalProducts}</p>
      <p>{totalPrice}</p>
    </div>
  );
}

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default OrdersCard;
