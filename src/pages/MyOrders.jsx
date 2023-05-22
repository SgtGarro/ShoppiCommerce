import Layout from "../components/Layout";
import OrdersCard from "../components/OrdersCard";
import React from "react";
import { ShoppingCartContext } from "../context";
import { Link } from "react-router-dom";

function MyOrders() {
  const { order } = React.useContext(ShoppingCartContext);

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-8 text-center">My Orders</h2>
      <div className="grid justify-center gap-6 overflow-y-auto h-full">
        {order.map((ord, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={ord.totalPrice}
              totalProducts={ord.totalProducts}
              date={ord.date}
            ></OrdersCard>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default MyOrders;
