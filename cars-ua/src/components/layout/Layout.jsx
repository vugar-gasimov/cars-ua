import React from "react";
import { Outlet } from "react-router-dom";

import { Suspense } from "react";
import Header from "../header/Header";
import Loader from "../loader/Loader";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
