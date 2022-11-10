import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllProducts from "../pages&components/pages/AllProducts/AllProducts";
import Home from "../pages&components/pages/Home/Home";
import Login from "../pages&components/pages/Login/Login";
import ProductsDetail from "../pages&components/pages/ProductsDetail/ProductsDetail";
import SignUp from "../pages&components/pages/SignUp/SignUp";

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
        element: <AllProducts />,
      },

      {
        path: "/productsDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/productsDetails/${params.id}`),
        element: <ProductsDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
