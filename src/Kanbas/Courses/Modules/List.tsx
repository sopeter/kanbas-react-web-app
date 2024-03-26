import React, { useEffect, useState } from "react";
import "./index.css";
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
  setModules,
} from "./reducer";
import * as client from "./client";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  }

  useEffect(() => {
    client.findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  return (
    <div>
      <div className="row row-xs-5 w-100 mt-2 g-1">
        <div className="col">
          <button
            type="button"
            className="btn h-100 w-100 wd-lgrey-button wd-border-button"
          >
            Collapse All
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn h-100 w-100 wd-lgrey-button wd-border-button"
          >
            View Progress
          </button>
        </div>
        <div className="col dropdown">
          <button
            className="btn h-100 w-100 wd-lgrey-button dropdown-toggle wd-border-button"
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
            className="btn h-100 w-100 btn-danger wd-border-button"
          >
            + Module
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn h-100 w-100 wd-lgrey-button wd-border-button"
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="d-flex">
            <div className="w-100 mx-1">
              <input
                className="form-control"
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
              <textarea
                className="form-control"
                value={module.description}
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
              />
            </div>
            <div>
              <button
                type="button"
                className="btn btn-success h-50 w-100"
                onClick={handleAddModule}
              >
                Add
              </button>
              <br />
              <button
                type="button"
                className="btn btn-primary h-50 w-100"
                onClick={handleUpdateModule}
              >
                Update
              </button>
            </div>
          </div>
        </li>

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              className="list-group-item"
              key={index}
              onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <button
                    type="button"
                    className="btn btn-primary btn-xs "
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-xs ms-1"
                    onClick={() => handleDeleteModule(module._id)}
                  >
                    Delete
                  </button>
                  <FaCheckCircle className="text-success ms-2" />
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
