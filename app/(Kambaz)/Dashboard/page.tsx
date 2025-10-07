import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardBody, CardImg, CardTitle, Button, CardText } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reach.png" width="100%" height={160}/>
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1234 React JS </CardTitle>
                    <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        Full Stack software developer</CardText>
                    <Button variant="primary">Go</Button>
                  </CardBody>
              </Link>
            </Card>
          </Col> 

          <Col className="wd-dashboard-course">
            <Card>
            <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src="/images/ML.png" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS5022 Machine learning </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    ML developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>


        <Col className="wd-dashboard-course">
          <Card>
          <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/NLP.jpg"  width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2345 NLP </CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  NLP developer
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course">
          <Card>
          <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/webdev.png" width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS9876 webdev </CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Webdev developer
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course">
          <Card>
          <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/Algo.png" width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2345 Algorithms </CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Algo expert
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </Col>

        
        <Col className="wd-dashboard-course">
          <Card>
          <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/management.jpg" width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS6789 Management </CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Engineering management
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </Col>


       
        <Col className="wd-dashboard-course">
          <Card>
          <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/ece.jpg" width="100%" height={160}/>  
              <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3456 Electronics </CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Embeded developer
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </Col>
         
       <Col className="wd-dashboard-course">
          <Card>
          <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/dbms.png" width="100%" height={160}/>
              <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS5200 DBMS </CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  DBMS developer
                </CardText>
                <Button variant="primary">Go</Button>
              </CardBody>
            </Link>
          </Card>
        </Col>
       
        </Row>
      </div>
    </div>
);}
