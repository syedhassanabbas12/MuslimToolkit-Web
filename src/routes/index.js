import React from "react";
import { PATHS } from "../constants/PathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const AboutUs = React.lazy(() => import("../components/AboutUs"));
const QuranHome = React.lazy(() => import("../pages/QuranHome"));

const RouteList = [
  {
    path: PATHS.ROOT,
    basename: "/",
    element: <Home />,
    isAuthRequired: false,
  },
  {
    path: PATHS.ABOUT_US,
    basename: "/about-us",
    element: <AboutUs />,
    isAuthRequired: false,
  },
  {
    path: PATHS.QURAN,
    basename: "/quran",
    element: <QuranHome />,
    isAuthRequired: false,
  },
];

export default RouteList;
