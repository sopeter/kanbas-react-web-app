import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 1,
    name: "NodeJS",
    description: "Module for NodeJS",
    course: "CS4550",
  });

  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
  const MODULE_URL = `${API_BASE}/a5/module`;

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <br />
      <button onClick={updateTitle}>Update Title to: {assignment.title}</button>
      <br />
      <button onClick={fetchAssignment}>Fetch Assignment</button>
      <br />
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Assignment Title
      </a>
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <br />
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Assignment Score
      </a>
      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.valueAsNumber })
        }
        value={assignment.score}
      />
      <br />
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Assignment Completeness
      </a>
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
        checked={assignment.completed}
      />
      <br />
      <br />
      <a href={`${MODULE_URL}/name/${module.name}`}>Update Module Name</a>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />

      <h4>Retrieving Objects</h4>
      <a href={ASSIGNMENT_URL}>Get Assignment</a>
      <br />
      <a href={MODULE_URL}>Get Module</a>
      <h4>Retrieving Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title`}>Get Title</a>
      <br />
      <a href={`${MODULE_URL}/name`}>Get Module Name</a>
    </div>
  );
}
export default WorkingWithObjects;
