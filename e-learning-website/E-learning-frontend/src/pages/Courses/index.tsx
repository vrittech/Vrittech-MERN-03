import { Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJWTToken } from "../../utils/helper";
import { getData } from "../../services/axios.service";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<any>([]);

  const token = getJWTToken();

  async function getCourse() {
    const response = await getData("courses", token);

    if (response.status) {
      setCourses(response.data);
    }
  }

  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div>
      <Button
        variant="contained"
        className="mb-2"
        onClick={(e) => navigate("/courses/add")}
      >
        Create Course
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.length > 0 &&
          courses.map((course: any) => {
            return (
              <Card key={course._id} className="flex flex-col h-full">
                <CardContent className="flex-grow">
                  <Typography variant="h5" component="h2" className="mb-2">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color={"textSecondary"}>
                    {course.description}
                  </Typography>
                  <div className="mt-auto">
                    <Typography variant="body2" color={"textSecondary"}>
                      Instructor: {course.instructorId.email}
                    </Typography>
                    <Typography variant="body2" color={"textSecondary"}>
                      Price: {course.price}
                    </Typography>
                    <Typography variant="body2" color={"textSecondary"}>
                      Duration: {course.duration} weeks
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Courses;
