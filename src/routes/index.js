import React from "react";
import { PATHS } from "../constants/PathConstants";

const Home = React.lazy(() => import("../components/Home"));
const AboutUs = React.lazy(() => import("../components/AboutUs"));

const RouteList = [
  {
    path: PATHS.ROOT,
    basename: "/",
    element: <Home />,
    isAuthRequired: false,
  },
  {
    path: PATHS.ABOUT_US,
    basename: "/",
    element: <AboutUs />,
    isAuthRequired: false,
  },
];

export default RouteList;
