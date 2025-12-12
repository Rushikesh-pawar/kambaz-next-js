"use client";

import { useRouter, useParams } from "next/navigation";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";

export default function AssignmentControls() {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="d-flex justify-content-end align-items-center mb-3">
      {currentUser?.role === "FACULTY" && (
        <Button
          variant="danger"
          size="lg"
          className="px-4"
          id="wd-add-assignment-btn"
          onClick={() =>
            router.push(`/Courses/${cid}/Assignments/new`)
          }
        >
          <FaPlus className="me-2 position-relative" style={{ bottom: "1px" }} />
          Assignment
        </Button>
      )}
    </div>
  );
}
