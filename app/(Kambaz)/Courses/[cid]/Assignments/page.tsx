"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  addAssignment,
  updateAssignment,
  deleteAssignment,
} from "./reducer";
import { Button, ListGroup, Modal } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import Link from "next/link";
import { FaTrash } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsGripVertical } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );

  const [showConfirm, setShowConfirm] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

  const handleAskDelete = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete._id));
    }
    setShowConfirm(false);
  };

  const handleCancelDelete = () => setShowConfirm(false);

  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-assignments">
      {isFaculty && <AssignmentControls />}
      <ListGroup className="rounded-0">
        <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown /> ASSIGNMENTS
          </div>
          <ListGroup className="rounded-0">
            {assignments
              ?.filter((a: any) => a.course === cid)
              .map((a: any) => (
                <ListGroup.Item
                  key={a._id}
                  className="d-flex align-items-start justify-content-between"
                >
                  <div className="d-flex gap-2 align-items-start">
                    <BsGripVertical className="fs-3" />
                    <PiNotePencilBold color="green" className="fs-3" />
                    <div>
                      <Link
                        href={`/Courses/${cid}/Assignments/${a._id}`}
                        className="text-decoration-none"
                      >
                        {a.title}
                      </Link>
                      <div>
                        <small className="text-muted">
                          {a.points} pts | Due {a.dueDate}
                        </small>
                      </div>
                    </div>
                  </div>

                  {isFaculty && (
                    <Button
                      variant="link"
                      className="text-danger p-0"
                      onClick={() => handleAskDelete(a)}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>

      {/* Delete Confirmation Modal */}
      <Modal show={showConfirm} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {assignmentToDelete ? (
            <>
              Are you sure you want to delete{" "}
              <strong>{assignmentToDelete.title}</strong>?
            </>
          ) : (
            "Are you sure you want to delete this assignment?"
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
