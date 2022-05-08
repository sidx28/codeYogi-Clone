import React from "react";
import { Outlet } from "react-router-dom";
import BackButton from "./BackButton";
import HamburgerButton from "./HamburgerButton";
import SideBar from "./SideBar";

function MainLayout() {
  return (
    <>
      <div className="h-screen bg-gray-100 flex flex-col md:flex-row items-stretch">
        <div className="md:hidden ">
          <HamburgerButton />
        </div>
        <div className="hidden md:block">
          <SideBar />
        </div>
        <div className="py-5 sm:px-5 grow">
          <Outlet />
        </div>
        <div>
          <BackButton />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
