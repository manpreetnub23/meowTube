import React from "react";
// import Feed from "./Feed";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* videos will render here. */}
      {/* <Feed /> */}
      <Outlet />
    </div>
  );
};

export default Body;
