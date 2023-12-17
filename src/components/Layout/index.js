import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../Loader";

export default function Layout() {
  const isLoading = false;
  return (
    <>
      {<Loader isLoading={isLoading} />}
      <Header />
      <main>
        <Suspense fallback={<Loader isLoading={true} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
