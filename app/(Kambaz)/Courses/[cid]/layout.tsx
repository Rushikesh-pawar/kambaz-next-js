"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
export default function CoursesLayout(
  { children }: { children: ReactNode }) {
  const { cid } = useParams();
 const { courses } = useSelector((state: RootState) => state.coursesReducer);
 const course = courses.find((course: any) => course._id === cid);

 const [sidebarVisible, setSidebarVisible] = useState(true);

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
