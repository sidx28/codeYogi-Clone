import axios from "axios";

const cacheData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};
export const getCachedData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const CODEYOGI_BASE_URL = 'https://api.codeyogi.io/';
export const getLectures = () => {
    const promise = axios.get(CODEYOGI_BASE_URL + 'batches/1/sessions', {
        withCredentials: true,
    });
    return promise
        .catch((e) => console.log(e))
        .then((response) => {
            const lectures = response.data;
            const filteredLectureList = (lectures).filter((e) => e.recording_url);
            cacheData('lectures', filteredLectureList);
            return filteredLectureList;
        });
};

export const getAssignmentList = () => {
    const promise = axios.get(CODEYOGI_BASE_URL + 'batches/1/assignments', {
        withCredentials: true,
    });
    return promise
        .catch((e) => console.log(e))
        .then((response) => {
            const assignmentList = response.data;
            cacheData('assignments', assignmentList);
            return assignmentList;
        });
};


export const getAssignmentDetail = (id) => {
    const promise = axios.get(CODEYOGI_BASE_URL + `assignments/${id}`, {
        withCredentials: true,
    });
    return promise
        .catch((e) => console.log(e))
        .then((response) => {
            const assignmentDetail = response.data;
            cacheData(`assignmentDetail${id}`, assignmentDetail);
            return assignmentDetail;
        });
};

export const submitAssignment = (submissionLink, assignmentNumber) => {
    axios.put(CODEYOGI_BASE_URL + `assignment/${assignmentNumber}/submit`, { submissionLink: submissionLink }, {
        withCredentials: true,
    });
    console.log(submissionLink);
};