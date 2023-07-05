import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="bg-blue-500" onClick={(e) => navigate("/courses/add")}>
        Create Course
      </button>
    </div>
  );
};

export default Courses;
