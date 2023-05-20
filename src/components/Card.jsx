function Card() {
  return (
    <div className="w-56 h-60 bg-white cursor-pointer">
      <figure className="relative w-full h-4/5">
        <img
          className="rounded-lg w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Product image"
        />
        <span className="absolute left-2 bottom-2 text-sm bg-gray-100 px-3 rounded-md font-bold">
          Category
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
        <span className="font-normal">Product name</span>
        <span className="font-bold text-lg">$000</span>
      </div>
    </div>
  );
}

export default Card;
