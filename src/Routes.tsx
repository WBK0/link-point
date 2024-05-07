import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Page";
import ProductsList from "./pages/ProductsList/Page";
import Product from "./pages/Product/Page";
import Cart from "./pages/Cart/Page";
import Order from "./pages/Order/Page";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductsList />,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/product/:group/:uuid",
      element: <Product />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/order",
      element: <Order />
    }
  ]);
  
  return(
    <RouterProvider router={router} />
  );
}

export default Routes;