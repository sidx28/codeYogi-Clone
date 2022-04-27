import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button";
import DD from "../DD";
import DT from "../DT";
import H3 from "../H3";
import { ImSpinner7 } from 'react-icons/im';
import { VscLinkExternal } from "react-icons/vsc";
import MDEditor from "@uiw/react-md-editor";
import { convertToRedableDate } from "../../ExtraFunctions";
import { getAssignmentDetail, getCachedData } from "../../api";
function AssignmentDetail() {
    const id = +(useParams().assignmentNumber);
    const [spinner, setShowSpinner] = useState(true);
    const cachedAssignmentDetail = getCachedData(`assignmnetDetail${id}`) || [];
    const [assignmentDetails, setAssignmentDetails] = useState(cachedAssignmentDetail);


    useEffect(() => {
        const promise = getAssignmentDetail(id);
        setShowSpinner(true);
        promise.then((assignmentDetail) => {
            setAssignmentDetails(assignmentDetail);
            setShowSpinner(false);
        });
    }, []);
    const { title, due_date, submissions, description } = assignmentDetails;

    const readableDate = convertToRedableDate(due_date);

    let submissionLink = '';
    if (Object.keys(assignmentDetails).length !== 0) {
        if (submissions.length !== 0) {
            submissionLink = (submissions[0].submission_link);
        }
    }

    return (
        <div className="mt-10">
            {spinner && <div className="flex items-center">
                <ImSpinner7 className="h-5 w-5 mr-2 animate-spin" />
                Loading...
            </div>}
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
                            <DD>{readableDate}</DD>
                        </div>
                        <div className="items-center py-5 grid grid-cols-3 gap-4">
                            <DT>Description</DT>
                            <DD><MDEditor.Markdown className="prose !bg-white !text-black  prose-li:font-medium" source={description} /></DD>
                        </div>
                        {!submissionLink && <div className="py-5">
                            <Button padding='small' theme='secondary'>Submit</Button>
                        </div>}
                        {submissionLink && <div className="py-5 flex flex-row items-center">
                            <Button padding='small' theme='secondary'>Re-Submit</Button>
                            <a target="_blank" href={submissionLink} className="text-indigo-700 inline-flex flex-row items-center ml-6 text-base">
                                <VscLinkExternal className="mr-2 h-3.5 w-3.5" />
                                See your submission
                            </a>
                        </div>}
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default AssignmentDetail;