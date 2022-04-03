import React from "react";
import AssignmentTile from "./AssignmentTile";
import H2 from "../H2";
import { assignmentsDetails } from "../mockData";

function Assignment() {
    let i = 0;
    return (
        <div className="py-6 px-8 w-full">
            <H2>Assignment List</H2>
            <div className="flex items-center justify-center px-6 py-4 mt-2 bg-gray-50 ">
                <div className="space-y-8 px-5 w-full">
                    {assignmentsDetails.map(e => <AssignmentTile assignment={e} key={i++} />)}
                </div>
            </div>
        </div>
    );
}

export default Assignment;