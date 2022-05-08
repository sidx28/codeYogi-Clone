import MDEditor from "@uiw/react-md-editor";
import { BiLinkExternal } from "react-icons/bi";
import React from "react";
import {
  convertToRedableDate,
  convertToRedableDuration,
} from "../../ExtraFunctions";
import H3 from "../H3";
function LectureTile(props) {
  const { created_at, topic, start_time, end_time, recording_url } =
    props.lecture;
  const redableDate = convertToRedableDate(created_at);
  const durationOfLecture = convertToRedableDuration(start_time, end_time);

  return (
    <>
      <li className="list-none">
        <div className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
          <div className="flex items-center justify-between w-full p-3 space-x-6">
            <div className="flex flex-col justify-between">
              <div className="flex flex-row">
                <H3>Lecture #{props.length - props.i}</H3>
                <span className="text-gray-500 ml-2">( {redableDate} )</span>
              </div>
              <p className="text-gray-500 mt-1 text-sm">
                Duration: {durationOfLecture}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 inline-block mt-3 p-1 py-2 ml-10">
            <ul className="list-disc">
              <MDEditor.Markdown
                className="prose !text-black prose-bullets prose-li:font-medium !bg-white max-w-none"
                source={topic}
              />
            </ul>
          </div>
          <div className="flex justify-center px-8">
            <a
              href={recording_url}
              target="_blank"
              className="text-sm font-medium w-full py-4 text-gray-500 hover:text-gray-700 inline-flex items-center justify-center"
            >
              <BiLinkExternal className="w-4 h-4 mr-1 sm:mr-3 sm:w-6 sm:h-6" />
              Watch/Download Recording
            </a>
          </div>
        </div>
      </li>
    </>
  );
}
export default LectureTile;
