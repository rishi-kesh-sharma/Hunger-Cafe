import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Home from "./pages/Home";
import store from "./store/store";
import "./styles.css";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";

const Contact = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "products/category/:id",
        element: <Products />,
      },

      {
        path: "blog/:slug",
        element: <BlogDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
