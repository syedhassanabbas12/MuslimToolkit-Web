import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import RouteList from "./routes";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Loader from "./components/Loader";
import { isAuthenticated } from "./helpers/AuthHelper";

const App = () => {
  const isLoggedIn = isAuthenticated();
  let filteredRoutes = RouteList;

  if (!isLoggedIn) {
    filteredRoutes = RouteList.filter((route) => route.isAuthRequired !== true);
  }

  const router = createBrowserRouter([
    {
      element: <Layout />,
      loader: () => <Loader isLoading={true} />,
      children: filteredRoutes,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
