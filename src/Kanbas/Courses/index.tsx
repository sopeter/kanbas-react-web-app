import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home"
import Assignments from "./Assignments";


function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const location = useLocation();
  const { hash, pathname, search } = location;
  const pathHeader = pathname.split("/").pop();
  return (
    <div>
      <div className="mt-1 mx-1 d-flex align-items-center">
        <span className="wd-course-header-sandwich">
          <HiMiniBars3 /> 
        </span>
        
        <span className="wd-course-header">
          {course?.name} 
        </span>
        <span className="wd-course-header-breadcrumb">
          {">"} 
        </span>
        <span className="wd-course-header-course-nav">
          {pathHeader}
        </span>
      </div>
      <hr />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
