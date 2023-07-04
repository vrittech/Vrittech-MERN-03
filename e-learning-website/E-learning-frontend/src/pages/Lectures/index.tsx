import React from "react";
import { useNavigate } from "react-router-dom";

const Lectures = () => {
  const navigate = useNavigate();
  return (
    <>
      Lectures
      <button onClick={(e) => navigate("/lecture/add")}>Add lecture</button>
    </>
  );
};

export default Lectures;
