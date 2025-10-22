"use client";

import Link from "next/link";
import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiNotePencilBold } from "react-icons/pi";
import { useParams } from "next/navigation";
import AssignmentControls from "./AssignmentControls";
import * as db from "../../../Database";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignment; // Make sure Database/index.ts exports `assignments`
  const courseAssignments = assignments.filter((a) => a.course === cid);

  return (
    <div id="wd-assignments" className="p-3">
      <AssignmentControls />

      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown />
            <span className="ms-2 text-uppercase">Assignments</span>
            <Badge bg="light" text="dark" className="ms-auto px-3 py-2 fw-normal">
              {courseAssignments.length} Assignments
            </Badge>
          </div>

          <ListGroup className="wd-assignment-list rounded-0">
            {courseAssignments.length === 0 && (
              <ListGroupItem className="p-3 text-muted">
                No assignments found for this course.
              </ListGroupItem>
            )}

            {courseAssignments.map((assignment) => (
              <ListGroupItem
                key={assignment._id}
                className="wd-assignment-list-item p-3 ps-2 d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotePencilBold color="green" className="me-2 fs-3" />
                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link text-decoration-none"
                  >
                    {assignment.title}
                  </Link>
                </div>

                <div className="d-flex flex-column align-items-end">
                  <LessonControlButtons />
                  <small className="text-muted mt-1">Assignment Weightage - 5%</small>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
