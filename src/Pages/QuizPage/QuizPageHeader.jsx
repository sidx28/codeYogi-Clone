import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

function QuizPageHeader() {
    return (
        <header>
            <div className="text-white bg-gray-800 px-4 fixed w-screen">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex items-center py-2">
                        <Link to='/' className="" >
                            <img className="h-12 w-12 flex " src="https://app.codeyogi.io/assets/CodeYogiLogoEnglishWhite.a677159f.svg" />
                        </Link>
                        <div className="hidden sm:flex flex-row items-center">
                            <span className="text-xl mx-2">|</span>
                            <h3>Welcome, Siddharth</h3>
                        </div>
                    </div>
                    <div className="space-x-4 flex flex-row ">
                        <div className="flex  items-center bg-blue-600 sm:p-3 py-2 px-1 text-white">
                            <AiOutlineClockCircle className="h-5 w-5 flex " />
                            <p className=" ml-1">00:00</p>
                        </div>
                        <div className="flex items-center bg-blue-600 text-white sm:p-3 py-2 px-1">
                            <BiLogOut className="h-5 w-5" />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                <div className="w-full items-center py-2 sm:hidden">
                    <p className="">Welcome, Siddharth</p>
                </div>
            </div>
        </header>
    );
}
export default QuizPageHeader;