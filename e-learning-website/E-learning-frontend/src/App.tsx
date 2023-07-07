import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/Sidebar";
import Lectures from "./pages/Lectures";
import Courses from "./pages/Courses";
import LectureForm from "./components/forms/AddLectureForm";
import AddCourseForm from "./components/forms/AddCourseForm";
import LectureEditForm from "./components/forms/EditLectureForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Sidebar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lecture" element={<Lectures />} />
          <Route path="/lecture/add" element={<LectureForm />} />
          <Route path="/lecture/:id" element={<LectureEditForm />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/add" element={<AddCourseForm />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
