import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button";
import DD from "../DD";
import DT from "../DT";
import H3 from "../H3";
import { VscLinkExternal } from "react-icons/vsc";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
function AssignmentDetail() {

    const [assignmentDetails, setAssignmentDetails] = useState([]);
    const data = useParams();
    const assignmentNumber = data.assignmentNumber;
    useEffect(() => {
        const token = axios.get(`https://api.codeyogi.io/assignments/${+assignmentNumber}`, {
            withCredentials: true,
        });
        token.then(response => {
            setAssignmentDetails(response.data);
        })
    }, []);
    const { title, due_date, submissions, description } = assignmentDetails;
    const dueDate = new Date(due_date);
    const dueDateString = dueDate.toDateString();

    let submissionLink = '';
    if (Object.keys(assignmentDetails).length !== 0) {
        if (submissions.length !== 0) {
            submissionLink = (submissions[0].submission_link);
        }
    }

    return (
        <div className="pt-10">
            <div className="bg-white p-4 rounded-md m-6 ">
                <H3>Assignment Detail</H3>
                <div className="mt-5 border-t border-gray-200">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="items-center py-5 grid grid-cols-3 gap-4">
                            <DT>Title</DT>
                            <DD>{title}</DD>
                        </div>
                        <div className="items-center py-5 grid grid-cols-3 gap-4">
                            <DT>Due Date</DT>
                            <DD>{dueDateString}</DD>
                        </div>
                        <div className="items-center py-5 grid grid-cols-3 gap-4">
                            <DT>Description</DT>
                            <DD><MDEditor.Markdown source={description} /></DD>
                        </div>
                        <div className="py-5 flex flex-row items-center">
                            <Button theme='secondary'>Re-Submit</Button>
                            <a target="_blank" href={submissionLink} className="text-indigo-700 inline-flex flex-row items-center ml-6 text-base">
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