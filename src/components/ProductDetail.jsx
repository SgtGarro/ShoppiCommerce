import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { ShoppingCartContext } from "../context";
function ProductDetail() {
  const { isProductOpen, closeProductDetail, productToShow } =
    React.useContext(ShoppingCartContext);

  return (
    <aside
      className={`max-w-sm w-2/5 fixed top-16 right-0 bg-white h-[calc(100vh-4rem)] border-gray-500 border rounded-lg transition-all duration-500 ease-out overflow-y-auto ${
        isProductOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={closeProductDetail}>
          <XMarkIcon className="w-6 h-6 cursor-pointer transition-all duration-300 ease-out hover:scale-125" />
        </div>
      </div>
      <figure className="px-6">
        <swiper-container
          class="rounded-lg overflow-hidden"
          slides-per-view="1"
          speed="500"
          loop="true"
        >
          {productToShow?.images?.map((img, i) => (
            <swiper-slide slides-per-view="1" speed="500" loop="true" key={i}>
              <img
                className="w-full h-full"
                src={img}
                alt={productToShow?.title}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </figure>
      <div className="p-6">
        <p className="font-medium text-2xl mb-2">${productToShow?.price}</p>
        <p className="font-medium text-xl mb-1">{productToShow?.title}</p>
        <p className="font-light">{productToShow?.description}</p>
      </div>
    </aside>
  );
}

export default ProductDetail;
