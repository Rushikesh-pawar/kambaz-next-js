"use client";
import Link from "next/link";
import { FormControl } from "react-bootstrap";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { Button } from "react-bootstrap";
export default function Signin() {
  
 const [credentials, setCredentials] = useState<any>({});
 const dispatch = useDispatch();
 const signin = () => {
   const user = db.users.find(
     (u: any) =>
       u.username === credentials.username &&
       u.password === credentials.password
   );
   if (!user) return;
   dispatch(setCurrentUser(user));
   redirect("/Dashboard");
 };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             className="mb-2"/><br />
      <FormControl defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}

             className="mb-2"/><br />
      <Button onClick={signin} id="wd-signin-btn"
            href="/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign in </Button><br />
      <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
    </div> );}