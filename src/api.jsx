import axios from "axios";
const cacheData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};
export const getCachedData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};


export const getLectures = () => {
    const promise = axios.get('https://api.codeyogi.io/batches/1/sessions', {
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