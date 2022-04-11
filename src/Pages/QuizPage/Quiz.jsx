import axios from "axios";
import React, { useEffect } from "react";
import QuestionPanel from "./QuestionPanel";
import QuizPageHeader from "./QuizPageHeader";

function Quiz() {
    let newdata;
    useEffect(() => {
        const token = axios.get('https://api.codeyogi.io/batches/1/question', {
            withCredentials: true,
        });
        token.then((response) => {
            newdata = response.data;
        });
    }, []);

    return (
        <div className="h-screen ">

            <QuizPageHeader />
            <QuestionPanel />

        </div>
    );
}
export default Quiz;