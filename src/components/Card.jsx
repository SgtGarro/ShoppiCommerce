import PropTypes from "prop-types";
function Card({ title, price, categoryName, image }) {
  return (
    <div className="w-full h-60 bg-white">
      <figure className="relative w-full h-4/5 cursor-pointer">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={image}
          alt={title}
        />
        <span className="absolute left-2 bottom-2 text-sm bg-gray-100 px-3 rounded-md font-bold">
          {categoryName}
        </span>
        <button
          type="button"
          className="absolute top-2 right-2 p-1 bg-white rounded-full"
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
      <div className="flex mt-2 items-center justify-between">
        <span className="font-normal">{title}</span>
        <span className="font-bold text-lg">${price}</span>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
