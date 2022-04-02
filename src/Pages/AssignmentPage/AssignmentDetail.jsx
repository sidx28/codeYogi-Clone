import React from "react";
import { useParams } from "react-router-dom";
import Button from "../Button";
import DD from "../DD";
import DT from "../DT";
import H3 from "../H3";
import assignmentsDetails from "../mockData";
import { VscLinkExternal } from "react-icons/vsc";
function AssignmentDetail() {
    const data = useParams();
    const id = data.assignmentNumber;
    const assignment = assignmentsDetails.filter(t => t.assignmentNumber === +id);

    return (
        <div className="pt-10">
            <div className="bg-white p-4 rounded-md m-6 ">
                <H3>Assignment Detail</H3>
                <div className="mt-5 border-t border-gray-200">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="items-center py-5 grid grid-cols-3 gap-4">
                            <DT>Title</DT>
                            <DD>{assignment[0].title}</DD>
                        </div>
                        <div className="items-center py-5 grid grid-cols-3 gap-4">
                            <DT>Due Date</DT>
                            <DD>{assignment[0].dueDate}</DD>
                        </div>
                        <div className="items-center py-5 grid grid-cols-3 gap-4">
                            <DT>Description</DT>
                            <DD>{assignment[0].description}</DD>
                        </div>
                        <div className="py-5 flex flex-row items-center">
                            <Button theme='secondary'>Re-Submit</Button>
                            <a className="text-indigo-700 inline-flex flex-row items-center ml-6 text-base">
                                <VscLinkExternal className="mr-2 h-3.5 w-3.5" />
                                See your submission
                            </a>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default AssignmentDetail;