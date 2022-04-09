import React, { useEffect, useState } from "react";
import AssignmentTile from "./AssignmentTile";
import H2 from "../H2";
import axios from "axios";
let loadedAssignmentsList = [];
function Assignment() {
    const [assignments, setAssignments] = useState(loadedAssignmentsList || []);

    useEffect(() => {
        const token = axios.get(`https://api.codeyogi.io/batches/1/assignments`, {
            withCredentials: true,
        });
        token.then(response => {
            setAssignments(response.data);


        });
    }, []);
    loadedAssignmentsList = assignments;

    return (
        <div className="py-6 px-8 w-full">
            <H2>Assignment List</H2>
            <div className="flex items-center justify-center px-6 py-4 mt-2 bg-gray-50 ">
                <div className="space-y-8 px-5 w-full">
                    {assignments.map(e => <AssignmentTile assignment={e} key={e.id} />)}
                </div>
            </div>
        </div>
    );
}

export default Assignment;