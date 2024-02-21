import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaRegCheckCircle,
} from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div>
      <div className="row row-xs-5 w-100 mt-2 g-1">
        <div className="col">
          <button
            type="button"
            className="btn w-100 wd-lgrey-button wd-border-button"
          >
            Collapse All
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn w-100 wd-lgrey-button wd-border-button"
          >
            View Progress
          </button>
        </div>
        <div className="col dropdown">
          <button
            className="btn w-100 wd-lgrey-button dropdown-toggle wd-border-button"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
          >
            {<FaRegCheckCircle className="text-success" />} Publish All
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn w-100 btn-danger wd-border-button"
          >
            + Module
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn w-100 wd-lgrey-button wd-border-button"
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />

      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;
