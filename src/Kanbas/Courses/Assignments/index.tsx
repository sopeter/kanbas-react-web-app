import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      <div className="row">
        <div className="d-flex flex-column col-md-6">
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search for Assignment"
            />
          </div>
        </div>

        <div className="d-flex flex-column col-md-6 justify-content-end">
          <div className="btn-group ">
            <button
              type="button"
              className="btn wd-lgrey-button wd-border-button"
            >
              + Group
            </button>
            <button type="button" className="btn btn-danger wd-border-button">
              + Assignment
            </button>
            <button
              type="button"
              className="btn wd-lgrey-button wd-border-button"
            >
              <FaEllipsisV />
            </button>
          </div>
        </div>
      </div>

      <hr />

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> <strong>ASSIGNMENTS</strong>
            <span className="float-end">
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                  className="wd-assignment-link"
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;
