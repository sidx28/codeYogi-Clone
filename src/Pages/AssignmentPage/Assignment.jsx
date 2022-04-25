import React, { useEffect, useState } from "react";
import AssignmentTile from "./AssignmentTile";
import H2 from "../H2";
import { ImSpinner7 } from 'react-icons/im'
import SubmissionPopup from "./SubmissionPopup";
import { getAssignmentList, getCachedData } from "../../api";

function Assignment() {
    const [spinner, setShowSpinner] = useState(true);
    const cachedAssignment = getCachedData('assignments') || [];
    const [assignments, setAssignments] = useState(cachedAssignment);

    useEffect(() => {
        const promise = getAssignmentList();
        setShowSpinner(true);
        promise.then((assignmentList) => {
            setAssignments(assignmentList);
            setShowSpinner(false);
        });
    }, []);

    const [showPopup, toggleShowPopup] = useState(false);

    const showSubmitFormPopup = () => {
        toggleShowPopup(!showPopup);
    };
    const onBlankSpaceClick = () => {
        toggleShowPopup(!showPopup);
    };
    return (
        <div className="py-6 px-8 w-full">
            <div className="md:mt-10">
                {spinner && <div className="flex items-center">
                    <ImSpinner7 className="h-5 w-5 mr-2 animate-spin" />
                    Loading...
                </div>}
                <H2>Assignment List</H2>
                <div className="fixed w-full z-10">{showPopup && <SubmissionPopup onClick={onBlankSpaceClick} />}</div>
                <div className="flex items-center justify-center px-6 py-4 mt-2 bg-gray-50 ">
                    <div className="space-y-8 px-5 w-full">
                        {assignments.map(e => <AssignmentTile onClick={showSubmitFormPopup} assignment={e} key={e.id} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Assignment;