import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image alt = "xyz" src="/images/reach.png" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image alt = "xyz" src="/images/ML.png" width={200} height={150} />
            <div>
              <h5> CS5022 Machine learning </h5>
              <p className="wd-dashboard-course-title">
                ML developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image alt = "xyz" src="/images/NLP.jpg" width={200} height={150} />
            <div>
              <h5> CS2345 NLP </h5>
              <p className="wd-dashboard-course-title">
                NLP developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image alt = "xyz" src="/images/webdev.png" width={200} height={150} />
            <div>
              <h5> CS9876 webdev </h5>
              <p className="wd-dashboard-course-title">
                Webdev developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image alt = "xyz" src="/images/management.jpg" width={200} height={150} />
            <div>
              <h5> CS3456 Management </h5>
              <p className="wd-dashboard-course-title">
                Engineering management
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image alt = "xyz" src="/images/ece.jpg" width={200} height={150} />
            <div>
              <h5> CS1357 Electronics </h5>
              <p className="wd-dashboard-course-title">
                Embeded developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image alt = "xyz" src="/images/dbms.png" width={200} height={150} />
            <div>
              <h5> CS5200 DBMS </h5>
              <p className="wd-dashboard-course-title">
                DBMS developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
