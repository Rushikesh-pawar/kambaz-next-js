import Link from 'next/link';

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input placeholder="Search for Assignments"
                id="wd-search-assignment" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A1 - ENV + HTML
                    </Link> </li>
                <p>
                    Multiple Modules | <b>Not available until</b> May 6 at 12:00am |{" "}
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                </p>
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A2 - CSS
                    </Link> </li>
                <p>
                    Multiple Modules | <b>Not available until</b> May 15 at 12:00am |{" "}
                    <b>Due</b> May 22 at 11:59pm | 100 pts
                </p>
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A1 - JS
                    </Link> </li>
                <p>
                    Multiple Modules | <b>Not available until</b> May 28 at 12:00am |{" "}
                    <b>Due</b> June 8 at 11:59pm | 100 pts
                </p>
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A1 - React
                    </Link> </li>
                <p>
                    Multiple Modules | <b>Not available until</b> June 12 at 12:00am |{" "}
                    <b>Due</b> June 20 at 11:59pm | 100 pts
                </p>
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A1 - Node
                    </Link> </li>
                <p>
                    Multiple Modules | <b>Not available until</b> June 25 at 12:00am |{" "}
                    <b>Due</b> July 7 at 11:59pm | 100 pts
                </p>
            </ul>
        </div>
    );
}
