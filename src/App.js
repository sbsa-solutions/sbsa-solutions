import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./pages/Layout";
import { Welcome } from "./pages/welcome";
import ErrorPage from "./components/Error";
import { Services } from "./pages/services";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import NoPage from "./components/NoPage";
import "./i18n";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", errorElement: <ErrorPage />, element: <Welcome /> },
      { index: true, element: <Welcome /> },

      {
        path: "/services",
        element: <Services />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/about", element: <About /> },

      { path: "*", element: <NoPage /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<>Loading...</>} />
    </>
  );
}
