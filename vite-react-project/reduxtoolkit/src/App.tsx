import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Counter from "./pages/Counter";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
