"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser, User } from "../reducer";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";
import { redirect } from "next/dist/client/components/navigation";

export default function Signup() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();

  const signup = () => {
    if (!credentials.username || !credentials.password) return;
    if (credentials.password !== credentials.passwordVerify) return;
    const exists = db.users.find((u: any) => u.username === credentials.username);
    if (exists) return;
    const newUser: User = {
      _id: Date.now().toString(),
      username: credentials.username,
      password: credentials.password,
      firstName: credentials.firstName || "",
      lastName: credentials.lastName || "",
      email: credentials.email || "",
      dob: "",
      role: "STUDENT",
      loginId: "",
      section: "",
      lastActivity: "",
      totalActivity: "",
    };
    (db.users as any).push(newUser);
    dispatch(setCurrentUser(newUser));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <FormControl
        defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        id="wd-username"
        placeholder="username"
        className="mb-2"
      />
      <FormControl
        defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <FormControl
        defaultValue={credentials.passwordVerify}
        onChange={(e) => setCredentials({ ...credentials, passwordVerify: e.target.value })}
        id="wd-password-verify"
        placeholder="verify password"
        type="password"
        className="mb-2"
      />
      <Button onClick={signup} className="w-100 mb-2">
        Sign up
      </Button>
      <Link href="/Account/Signin"> Sign in </Link>
    </div>
  );
}
