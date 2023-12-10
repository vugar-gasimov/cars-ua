import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../header/Header";
import { ThreeCircles } from "react-loader-spinner";
const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Suspense
          fallback={
            <ThreeCircles
              height="100"
              width="100"
              color="#3470FF"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
