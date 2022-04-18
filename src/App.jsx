import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Lecture from "./Pages/LecturePage/Lecture";
import Assignment from "./Pages/AssignmentPage/Assignment";
import Quiz from "./Pages/QuizPage/Quiz";
import AssignmentDetail from "./Pages/AssignmentPage/AssignmentDetail";
import Profile from "./Pages/ProfilePage/Profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="lectures" />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="assignments" element={<Assignment />} />
        <Route path="lectures" element={<Lecture />} />
        <Route path="assignment/:assignmentNumber/details" element={<AssignmentDetail />} />
      </Route>
      <Route path="quiz" element={<Quiz />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
