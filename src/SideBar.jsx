import React from "react";
import NavBar from "./NavBar";

function SideBar() {
    return (
        <div className="flex flex-row">
            <div className="h-screen w-60 bg-gray-800 flex flex-col py-5 px-2 fixed">
                <div className="px-4 flex ">
                    <h1 className="text-3xl font-extrabold text-white">CODEYOGI</h1>
                </div>
                <NavBar />
            </div>
            <div className="h-screen w-60"></div>
        </div>
    );
}

export default SideBar;