import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { VscLinkExternal } from "react-icons/vsc";

function AssignmentTile(props) {
  const { id, created_at, title, due_date } = props.assignment;
  return (
    <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5 list-none " >
      <div className="flex flex-col items-center justify-between w-full p-3">
        <Link to={`/assignment/${id}/details`} className="w-full">
          <div className="flex justify-between items-center flex-row">
            <div>
              <div className="flex flex-row">
                <h3 className="font-medium text-gray-900">#{id} {title}</h3>
                <span className="text-gray-500 font-semibold ml-3">( {created_at} )</span>
              </div>
              <p className="text-red-600 mt-3">Due Date: {due_date}</p>
            </div>
            <p className="text-green-600 font-semibold px-2 py-4 whitespace-nowrap block">Submitted</p>
          </div>
        </Link>
        <div className="flex divide-x pt-4 mt-4 divide-gray-200 w-full">
          <Button icon={<AiOutlineCheckCircle className="w-6 h-6 mr-3" />}>Submit</Button>
          <a className="inline-flex items-center justify-center flex-1 w-full py-4 font-medium text-center text-indigo-500 underline border-transparent hover:text-indigo-700">
            <VscLinkExternal className="w-6 h-6 mr-3" />
            See your submission
          </a>
        </div>
      </div>
    </li>
  );
}

export default AssignmentTile;