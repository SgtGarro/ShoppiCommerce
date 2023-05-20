import { BrowserRouter, useRoutes } from "react-router-dom";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { ShoppingCartProvider } from "../context";
import Home from "./Home";
import MyAccount from "./MyAccount";
import MyOrder from "./MyOrder";
import MyOrders from "./MyOrders";
import NotFound from "./NotFound";
import SignIn from "./SignIn";

const AppRoutes = function () {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = function () {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Navbar />
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
