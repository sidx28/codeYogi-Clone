import axios from "axios";
import React, { useState, useEffect } from "react";
import H2 from '../H2'
import LectureTile from "./LectureTile";
let loadedLectureList = [];
function Lecture() {
    let i = 0;
    const [lectureList, updateLectureList] = useState(loadedLectureList || []);
    useEffect(() => {
        const token = axios.get('https://api.codeyogi.io/batches/1/sessions', {
            withCredentials: true,
        });
        token.then((response) => {
            updateLectureList(response.data);
        })
    }, []);
    loadedLectureList = [...lectureList];


    return (
        <div className="py-6 px-8 w-full">
            <H2>Lecture List</H2>
            <div className="flex items-center justify-center px-6 py-4 mt-2 bg-gray-50 ">
                <div className="space-y-8 px-5 w-full">
                    {lectureList.map(e => <LectureTile length={lectureList.length} i={i++} lecture={e} key={e.id} />)}
                </div>
            </div>
        </div>
    );
}

export default Lecture;