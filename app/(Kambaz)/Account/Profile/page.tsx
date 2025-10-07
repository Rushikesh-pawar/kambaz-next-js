import Link from "next/link";
import { Form, FormControl } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl defaultValue="alice" placeholder="username" className="wd-username"/><br/>
      <FormControl defaultValue="123"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <FormControl defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
      <FormControl defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
      <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
      <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      <Form.Select defaultValue="FACULTY" id="wd-role" className="mb-3">
+        <option value="USER">User</option>
+        <option value="ADMIN">Admin</option>
+        <option value="FACULTY">Faculty</option>
+        <option value="STUDENT">Student</option>
+      </Form.Select><br/>
      <Link href="Signin" className="btn btn-primary w-100 mb-2" style={{ backgroundColor: "red", borderColor: "red" }} > Signout </Link>
    </div>
);}
