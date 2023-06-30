import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/a" element={<Sidebar />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
