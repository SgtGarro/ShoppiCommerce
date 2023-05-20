import { BrowserRouter, useRoutes } from "react-router-dom";
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
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;