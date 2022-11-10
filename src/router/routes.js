import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages&components/pages/Home/Home";
import ProductsDetail from "../pages&components/pages/ProductsDetail/ProductsDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/allProducts",
        element: <Home />,
      },

      {
        path: "/productsDetails/:id",
        element: <ProductsDetail />,
      },
    ],
  },
]);
