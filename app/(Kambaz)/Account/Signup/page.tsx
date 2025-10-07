import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <FormControl  id = 'wd-username' placeholder="username" className="wd-username" /><br/>
      <FormControl id = 'wd-password' placeholder="password" type="password" className="wd-password" /><br/>
      <FormControl id = 'wd-password-verify' placeholder="verify password"
             type="password" className="wd-password-verify" /><br/>
      <Link  href="Profile" className="btn btn-primary w-100 mb-2"> Sign up </Link><br />
      <Link  href="Signin"> Sign in </Link>
    </div>
);}
