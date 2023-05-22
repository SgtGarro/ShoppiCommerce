import Layout from "../components/Layout";
import OrderCard from "../components/OrderCard";
import React from "react";
import { ShoppingCartContext } from "../context";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function MyOrder() {
  const { order } = React.useContext(ShoppingCartContext);

  const currentPath = window.location.pathname;
  const lastPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  const index = lastPath === "last" ? -1 : +lastPath;
  return (
    <Layout>
      <div className="flex items-center mb-8 gap-3">
        <Link to="/my-orders">
          <ChevronLeftIcon className="w-6 h-6 flex-none" />
        </Link>
        <h2 className="text-2xl font-semibold">My Order</h2>
      </div>
      <div className="grid justify-center gap-6 overflow-y-auto h-full">
        {order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            img={product.images?.[0]}
            quantity={product.quantity}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
