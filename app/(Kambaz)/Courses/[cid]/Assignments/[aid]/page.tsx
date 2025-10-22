"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = db;

  const assignment = assignments.find((a: any) => a._id === aid);

  if (!assignment) {
    return <p className="p-4">Assignment not found.</p>;
  }

  return (
    <div className="container p-4">
      <h2>{assignment.title}</h2>
      <p>{assignment.description}</p>

      <div className="mb-3">
        <strong>Points:</strong> {assignment.points}
      </div>
      <div className="mb-3">
        <strong>Available From:</strong> {assignment.availableFrom}
      </div>
      <div className="mb-3">
        <strong>Due Date:</strong> {assignment.dueDate}
      </div>

      <div className="d-flex gap-2 mt-4">
        <Link
          href={`/Courses/${cid}/Assignments`}
          className="btn btn-secondary"
        >
          Cancel
        </Link>
        <Link
          href={`/Courses/${cid}/Assignments`}
          className="btn btn-primary"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
