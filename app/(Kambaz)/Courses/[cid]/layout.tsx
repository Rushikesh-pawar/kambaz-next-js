"use client";
import { ReactNode, useState, useEffect } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { RootState } from "../../store";
export default function CoursesLayout(
  { children }: { children: ReactNode }) {
  const { cid } = useParams();
  const router = useRouter();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const course = courses.find((course: any) => course._id === cid);

  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    // Check if user has access to this course
    if (!course) {
      router.push("/Dashboard");
      return;
    }

    // Faculty and Admin can always access
    if (currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN") {
      return;
    }

    // For other users, check enrollment
    const isEnrolled = enrollments.some(
      (e: any) => e.user === currentUser?._id && e.course === cid
    );

    if (!isEnrolled) {
      router.push("/Dashboard");
    }
  }, [cid, course, currentUser, enrollments, router]);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
 return (
   <div id="wd-courses">
      <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" style={{ cursor: "pointer" }}
          onClick={toggleSidebar} />
     {course?.name}</h2>  <hr />
      
   <div className="d-flex">
    <div style={{ display: sidebarVisible ? "block" : "none" }}>
      <CourseNavigation /> 
      </div>
    <div className="flex-fill">
      {children}
    </div>
    </div>
   </div>
);}
