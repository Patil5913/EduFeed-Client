import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home/Home.jsx";
import FacultyFeedback from "./Pages/Student/FacultyFeedback.jsx";
import Login from "./Pages/Login/Login.jsx";
import Student from "./Pages/Student/Student.jsx";
import Register from "./Pages/Mentor/Register.jsx";
import Mentor from "./Pages/Mentor/Mentor.jsx";
import Authority from "./Pages/Authority/Authority.jsx";
import Error from "./Pages/Error/ErrorPage.jsx";
// import { AuthProvider } from "./Store/Auth.jsx";
import ForgetPass from "./Pages/ForgotPassword/ForgotPassword.jsx";
import UploadCsv from "./Pages/Mentor/UploadCsv.jsx";
import "./index.css";
import AddQuestion from "./Pages/Mentor/AddQuestion.jsx";


const routes = (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="facultyfeedback" element={<FacultyFeedback />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="student" element={<Student />} />
      <Route path="mentor" element={<Mentor />} />
      <Route path="authority" element={<Authority />} />
      <Route path="forgot" element={<ForgetPass />} />
      <Route path="upload" element={<UploadCsv />} />
      <Route path="addquestion" element={<AddQuestion />} />
      <Route path="*" element={<Error />} />
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <AuthProvider>
    <React.StrictMode>
      <Router>{routes}</Router>
    </React.StrictMode>
  // </AuthProvider>
);
