import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <p>this is root layout</p>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
