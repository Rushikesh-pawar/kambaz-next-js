"use client"
import { useState } from "react";
import Link from "next/link";
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enrollUser, unenrollUser } from "../Enrollments/reducer";
import { RootState } from "../store";


import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  


  const isEnrolled = (courseId: string) => {
    if (!currentUser?._id) return false;
    return enrollments.some(
      (e: any) => e.user === currentUser._id && e.course === courseId
    );
  };

  const handleEnroll = (courseId: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (currentUser?._id) {
      dispatch(enrollUser({ userId: currentUser._id, courseId }));
    }
  };

  const handleUnenroll = (courseId: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (currentUser?._id) {
      dispatch(unenrollUser({ userId: currentUser._id, courseId }));
    }
  };

  const handleCourseClick = (courseId: string, event: React.MouseEvent) => {
    // For non-faculty/admin users, check enrollment before navigating
    if (currentUser?.role !== "FACULTY" && currentUser?.role !== "ADMIN") {
      if (!isEnrolled(courseId)) {
        event.preventDefault();
        return;
      }
    }
  };

  const filteredCourses = courses.filter((course) => {
    // If showing all courses (Enrollments mode), show everything
    if (showAllCourses) {
      return true;
    }
    // Default: Show all courses for FACULTY and ADMIN roles
    if (currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN") {
      return true;
    }
    // For other roles, show only enrolled courses
    return isEnrolled(course._id);
  });

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowAllCourses(!showAllCourses)}
          id="wd-enrollments-button"
        >
          Enrollments
        </button>
      </div>
      <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => dispatch(addNewCourse(course))} > Add </button>
                  <button className="btn btn-warning float-end me-2"
                onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
          Update </button>
      </h5><br />
      <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as="textarea" value={course.description} rows={3}onChange={(e) => setCourse({ ...course, description: e.target.value }) } /><hr />

      <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {filteredCourses.map((course) => {
            const enrolled = isEnrolled(course._id);
            const isFacultyOrAdmin = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";
            return (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link 
                  href={isFacultyOrAdmin || enrolled ? `/Courses/${course._id}/Home` : "#"}
                  onClick={(e) => handleCourseClick(course._id, e)}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src={course.image || "/images/webdev.png"} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                    <Button variant="primary"> Go </Button>
                    {isFacultyOrAdmin && (
                      <>
                        <button onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          dispatch(deleteCourse(course._id));
                        }} className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                        </button>
                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>
                      </>
                    )}
                    {!isFacultyOrAdmin && (
                      enrolled ? (
                        <button
                          onClick={(e) => handleUnenroll(course._id, e)}
                          className="btn btn-danger float-end"
                          id="wd-unenroll-button">
                          Unenroll
                        </button>
                      ) : (
                        <button
                          onClick={(e) => handleEnroll(course._id, e)}
                          className="btn btn-success float-end"
                          id="wd-enroll-button">
                          Enroll
                        </button>
                      )
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          )})}
        </Row>
      </div>
    </div>);}