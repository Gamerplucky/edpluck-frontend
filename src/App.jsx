import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import Dashboard from "./Dashboard";
import AttendanceAnalytics from "./AttendanceAnalytics";
import Homework from "./Homework";
import SubmitHomework from "./SubmitHomework";
import ProgressAnalytics from "./ProgressAnalytics";
import AIChat from "./AIChat";
import ParentDashboard from "./ParentDashboard";
import Settings from "./Settings";

import TeacherDashboard from "./TeacherDashboard";
import TeacherAttendance from "./TeacherAttendance";
import TeacherHomework from "./TeacherHomework";
import TeacherMarks from "./TeacherMarks";
import TeacherStudents from "./TeacherStudents";
import TeacherNotice from "./TeacherNotice";
import TeacherAssignments from "./TeacherAssignments";

import AdminDashboard from "./AdminDashboard";
import AdminAnalytics from "./AdminAnalytics";
import AdminTeachers from "./AdminTeachers";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard darkMode={darkMode} />} />
      <Route path="/attendance" element={<AttendanceAnalytics darkMode={darkMode} />} />
      <Route path="/homework" element={<Homework darkMode={darkMode} />} />
      <Route path="/submit" element={<SubmitHomework darkMode={darkMode} />} />
      <Route path="/progress" element={<ProgressAnalytics darkMode={darkMode} />} />
      <Route path="/ai" element={<AIChat darkMode={darkMode} />} />
      <Route path="/parent" element={<ParentDashboard darkMode={darkMode} />} />
      <Route
        path="/settings"
        element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />}
      />

      <Route path="/teacher-dashboard" element={<TeacherDashboard darkMode={darkMode} />} />
      <Route path="/teacher-students" element={<TeacherStudents darkMode={darkMode} />} />
      <Route path="/teacher-attendance" element={<TeacherAttendance darkMode={darkMode} />} />
      <Route path="/teacher-homework" element={<TeacherHomework darkMode={darkMode} />} />
      <Route path="/teacher-assignments" element={<TeacherAssignments darkMode={darkMode} />} />
      <Route path="/teacher-marks" element={<TeacherMarks darkMode={darkMode} />} />
      <Route path="/teacher-notice" element={<TeacherNotice darkMode={darkMode} />} />
      <Route path="/teacher-reports" element={<TeacherDashboard darkMode={darkMode} />} />
      <Route path="/teacher-settings" element={<TeacherDashboard darkMode={darkMode} />} />

      <Route path="/admin-dashboard" element={<AdminDashboard darkMode={darkMode} />} />
      <Route path="/admin-analytics" element={<AdminAnalytics darkMode={darkMode} />} />
      <Route path="/admin-teachers" element={<AdminTeachers darkMode={darkMode} />} />
      <Route path="/admin-fees" element={<AdminDashboard darkMode={darkMode} />} />
      <Route path="/admin-students" element={<AdminDashboard darkMode={darkMode} />} />
      <Route path="/admin-reports" element={<AdminDashboard darkMode={darkMode} />} />
      <Route path="/admin-settings" element={<AdminDashboard darkMode={darkMode} />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;