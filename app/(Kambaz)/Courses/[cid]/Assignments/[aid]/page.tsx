"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import {
  Form,
  Row,
  Col,
  Card,
  FormLabel,
  FormControl,
  CardBody,
  FormSelect,
  FormCheck,
} from "react-bootstrap";
import { useRef } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const assignment =
    aid !== "new" ? assignments.find((a: any) => a._id === aid) : null;

  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const pointsRef = useRef<HTMLInputElement>(null);
  const dueRef = useRef<HTMLInputElement>(null);
  const availableFromRef = useRef<HTMLInputElement>(null);
  const availableUntilRef = useRef<HTMLInputElement>(null);

  const handleCancel = () => router.push(`/Courses/${cid}/Assignments`);

  const handleSave = () => {
    const newAssignment = {
      _id: assignment?._id,
      title: nameRef.current?.value || "Untitled Assignment",
      description: descriptionRef.current?.value || "",
      points: Number(pointsRef.current?.value) || 100,
      dueDate: dueRef.current?.value,
      availableFrom: availableFromRef.current?.value,
      availableUntil: availableUntilRef.current?.value,
      course: cid,
    };

    if (aid === "new") {
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(newAssignment));
    }

    router.push(`/Courses/${cid}/Assignments`);
  };

  if (aid !== "new" && !assignment) {
    return <div className="p-4 text-danger">Assignment not found.</div>;
  }

  return (
    <div className="container-fluid" id="wd-assignments-editor">
      <Card className="border-0">
        <CardBody className="p-4">
          <Form className="mb-3">
            <FormLabel>Assignment Name</FormLabel>
            <FormControl
              type="text"
              defaultValue={assignment?.title ?? ""}
              ref={nameRef}
            />
          </Form>

          <Form className="mb-4">
            <FormLabel>Description</FormLabel>
            <FormControl
              as="textarea"
              rows={10}
              defaultValue={
                assignment?.description ??
                "The assignment is available online. Submit your project link below."
              }
              ref={descriptionRef}
            />
          </Form>

          <Row className="g-3 mb-3 align-items-center">
            <Col sm={3} className="text-sm-end">
              <FormLabel>Points</FormLabel>
            </Col>
            <Col sm={9}>
              <FormControl
                type="number"
                defaultValue={assignment?.points ?? 100}
                ref={pointsRef}
              />
            </Col>
          </Row>

          <Row className="g-3 mb-3">
            <Col sm={3} className="text-sm-end">
              <FormLabel>Due Date</FormLabel>
            </Col>
            <Col sm={9}>
              <FormControl
                type="date"
                defaultValue={assignment?.dueDate ?? ""}
                ref={dueRef}
              />
            </Col>
          </Row>

          <Row className="g-3 mb-4">
            <Col sm={3} className="text-sm-end">
              <FormLabel>Available From</FormLabel>
            </Col>
            <Col sm={9}>
              <FormControl
                type="date"
                defaultValue={assignment?.availableFrom ?? ""}
                ref={availableFromRef}
              />
            </Col>
          </Row>

          <Row className="g-3 mb-4">
            <Col sm={3} className="text-sm-end">
              <FormLabel>Available Until</FormLabel>
            </Col>
            <Col sm={9}>
              <FormControl
                type="date"
                defaultValue={assignment?.availableUntil ?? ""}
                ref={availableUntilRef}
              />
            </Col>
          </Row>

          <div className="d-flex justify-content-end gap-2">
            <button onClick={handleCancel} className="btn btn-light">
              Cancel
            </button>
            <button onClick={handleSave} className="btn btn-danger">
              Save
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
