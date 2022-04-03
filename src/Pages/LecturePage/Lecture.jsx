import React from "react";
import H2 from '../H2'
import { lecturesDetails } from "../mockData";
import LectureTile from "./LectureTile";
let i = 0;
function Lecture() {
    return (
        <div className="py-6 px-8 w-full">
            <H2>Lecture List</H2>
            <div className="flex items-center justify-center px-6 py-4 mt-2 bg-gray-50 ">
                <div className="space-y-8 px-5 w-full">
                    {lecturesDetails.map(e => <LectureTile lecture={e} key={i++} />)}
                </div>
            </div>
        </div>
    );
}

export default Lecture;