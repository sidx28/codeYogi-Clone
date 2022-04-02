import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function MainLayout() {
    return (
        <>

            <div className="h-screen bg-gray-100 flex flex-row items-stretch">
                <div >
                    <SideBar />
                </div>
                <div className="p-5 grow">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default MainLayout;