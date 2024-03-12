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
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  const dispatch = useDispatch();

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
        <li className="list-group-item">
          <button onClick={() => dispatch(addModule({ ...module, course: courseId}))}>
            Add
          </button>
          <button onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input value={module.name} onChange={(e) => dispatch(setModule({...module, name: e.target.value})) } />
          <textarea value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value}))} />
        </li>
        {moduleList.filter((module) => module.course === courseId).map((module, index) => (
          <li
            className="list-group-item"
            key={index}
            onClick={() => setSelectedModule(module)}
          >
            <button onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
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
                {module.lessons?.map((lesson: any) => (
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
