"use client";
import React, { useState } from "react";
import { FormControl, FormCheck } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: "M101",
    name: "React",
    description: "React is a JavaScript library for building user interfaces",
    course: "CS4550",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      
      {/* Assignment Section */}
      <h4>Assignment</h4>
      <h5>Modifying Assignment Properties</h5>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}>
        Update Title </a>
      <FormControl className="w-75 mb-2" id="wd-assignment-title"
        value={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      
      <a id="wd-update-assignment-score"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score </a>
      <FormControl className="w-75 mb-2" id="wd-assignment-score" type="number"
        value={assignment.score} onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })}/>
      
      <a id="wd-update-assignment-completed"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed </a>
      <FormCheck className="w-75 mb-2" id="wd-assignment-completed"
        type="checkbox" checked={assignment.completed} onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })} label="Completed"/>
      <hr />

      <h5>Retrieving Assignment Objects</h5>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h5>Retrieving Assignment Properties</h5>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>

      {/* Module Section */}
      <h4>Module</h4>
      <h5>Modifying Module Properties</h5>
      <a id="wd-update-module-name"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}>
        Update Name </a>
      <FormControl className="w-75 mb-2" id="wd-module-name"
        value={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/>
      
      <a id="wd-update-module-description"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}>
        Update Description </a>
      <FormControl className="w-75 mb-2" id="wd-module-description"
        value={module.description} onChange={(e) =>
          setModule({ ...module, description: e.target.value })}/>
      <hr />

      <h5>Retrieving Module Objects</h5>
      <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
      <h5>Retrieving Module Properties</h5>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>
    </div>
);}
