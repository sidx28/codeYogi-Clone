import React, { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
let toggleState;
function HamburgerButton() {
    const [sideBarShow, toggleSideBarShow] = useState(false);
    const toggleSideBar = (() => {
        toggleSideBarShow(!sideBarShow);
    });
    toggleState = sideBarShow;
    console.log(toggleState);
    return (
        <div className="pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button onClick={toggleSideBar} className="h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <GiHamburgerMenu className="h-5 w-5" />
            </button>
        </div>
    );
}
export default HamburgerButton;