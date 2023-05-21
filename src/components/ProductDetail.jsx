import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { ShoppingCartContext } from "../context";
function ProductDetail() {
  const { isProductOpen, closeProductDetail } =
    React.useContext(ShoppingCartContext);
  return (
    <aside
      className={`max-w-md w-2/5 fixed top-16 right-0 bg-white h-[calc(100vh-4rem)] border-current border rounded-lg translate-x-full transition-all duration-500 ease-out ${
        isProductOpen ? "translate-x-0" : ""
      }`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={closeProductDetail}>
          <XMarkIcon className="w-6 h-6 cursor-pointer transition-all duration-300 ease-out hover:scale-125" />
        </div>
      </div>
    </aside>
  );
}

export default ProductDetail;
