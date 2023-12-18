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
      <div className="bg-gradient-to-b from-tertiary">
        <main>
          <Suspense fallback={<Loader isLoading={true} />}>
            <div className="container mx-auto"><Outlet /></div>
          </Suspense>
        </main>
      </div>
      <Footer />
    </>
  );
}
