import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../Loader";
import { useSelector } from "react-redux";

export default function Layout() {
  const isLoading = useSelector((state) => state?.general?.isLoading);

  return (
    <>
      {<Loader isLoading={isLoading} />}
      <Header />
      <div className={"bg-primary"}>
        <main>
          <Suspense fallback={<Loader isLoading={true} />}>
            <div className="container mx-auto">
              <Outlet />
            </div>
          </Suspense>
        </main>
      </div>
      <Footer />
    </>
  );
}
