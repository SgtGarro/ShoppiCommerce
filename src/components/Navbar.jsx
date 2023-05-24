import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../context";

function Navbar() {
  const activeStyle = "underline underline-offset-4";
  const { counter, setSearchByCategory, setIsCheckoutSideMenuOpen } =
    React.useContext(ShoppingCartContext);
  return (
    <nav className="flex h-16 items-center justify-between px-12 fixed top-0 left-0 w-full bg-white shadow-sm shadow-gray-300  z-50">
      <ul className="flex gap-3 items-center">
        <li className="font-semibold text-lg text-[#212529]">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => setSearchByCategory("")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => setSearchByCategory("clothes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => setSearchByCategory("furnitures")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => setSearchByCategory("toys")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => setSearchByCategory("others")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex gap-3 items-center">
        <li className="text-[#868e96]">marce@mail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign in
          </NavLink>
        </li>
        <li
          className="relative cursor-pointer"
          onClick={() => setIsCheckoutSideMenuOpen(true)}
        >
          <ShoppingBagIcon className="w-6 h-6" />
          <span className="absolute top-0 right-0 text-white bg-[#495057] rounded-full text-sm w-5 h-5 grid place-items-center leading-none translate-x-1/2 -translate-y-1/3">
            {counter}
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
