import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
function QuizPageHeader() {
    return (
        <header>
            <div className="text-white bg-gray-800 px-4">
                <div className="w-full border-b border-indigo-500 py-1">
                    <div className="flex items-center py-2">
                        <Link to='/' className="font-semibold">Code Yogi</Link>
                    </div>
                    <div className="space-x-4">
                        <div className="flex items-center bg-blue-500 py-2 px-1 text-white">
                            <AiOutlineClockCircle className="h-5 w-5" />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}
export default QuizPageHeader;