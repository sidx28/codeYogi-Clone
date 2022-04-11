import React from "react";
import NavBar from "./NavBar";

function SideBar() {
    return (
        <div className="flex flex-row">
            <div className="h-screen w-60 bg-gray-800 flex flex-col py-5 px-2 fixed">
                <div className="px-4 flex ">
                    <img className="h-10" src="https://app.codeyogi.io/assets/CodeYogiLogoWhite.64529273.svg" />
                    <h1 className="text-2xl font-bold text-white ml-2">CODEYOGI</h1>
                </div>
                <NavBar />
            </div>
            <div className="h-screen w-60"></div>
        </div>
    );
}

export default SideBar;