import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { ShoppingCartContext } from "../context";
function ProductDetail() {
  const { isProductOpen, closeProductDetail, productToShow } =
    React.useContext(ShoppingCartContext);

  const product = productToShow ? productToShow : undefined;
  return (
    <aside
      style={{ transform: isProductOpen ? "translateX(0)" : "" }}
      className={
        "max-w-sm w-2/5 fixed top-16 right-0 bg-white h-[calc(100vh-4rem)] border-current border rounded-lg transition-all duration-500 ease-out translate-x-full overflow-y-auto"
      }
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
          {product?.images?.map((img, i) => (
            <swiper-slide slides-per-view="1" speed="500" loop="true" key={i}>
              <img className="w-full h-full" src={img} alt={product?.title} />
            </swiper-slide>
          ))}
        </swiper-container>
      </figure>
      <div className="p-6">
        <p className="font-medium text-2xl mb-2">${product?.price}</p>
        <p className="font-medium text-xl mb-1">{product?.title}</p>
        <p className="font-light">{product?.description}</p>
      </div>
    </aside>
  );
}

export default ProductDetail;
