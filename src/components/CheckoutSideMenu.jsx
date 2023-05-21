import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ShoppingCartContext } from "../context";
function CheckoutSideMenu() {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } =
    React.useContext(ShoppingCartContext);
  return (
    <aside
      className={`max-w-sm w-2/5 fixed top-16 right-0 bg-white h-[calc(100vh-4rem)] border-gray-500 border rounded-lg transition-all duration-500 ease-out overflow-y-auto ${
        isCheckoutSideMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Orders</h2>
        <div onClick={closeCheckoutSideMenu}>
          <XMarkIcon className="w-6 h-6 cursor-pointer transition-all duration-300 ease-out hover:scale-125" />
        </div>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
