"use client";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
   const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="p-3" style={{ maxWidth: 200 }}>
      <ListGroup className="rounded-0 list-group-flush">
        <ListGroupItem className="border-dark border-0 rounded-0 border-start border-3 ">
          <Link href="Signin" className="text-danger text-decoration-none ">Signin</Link>
        </ListGroupItem>
        <ListGroupItem className="border-0 rounded-0">
          <Link href="Signup" className="text-danger text-decoration-none ">Signup</Link>
        </ListGroupItem>
        <ListGroupItem className="border-0 rounded-0">
          <Link href="Profile" className="text-danger text-decoration-none">Profile</Link>
        </ListGroupItem>
        {currentUser && currentUser.role === "ADMIN" && (
          <ListGroupItem className="border-0 rounded-0">
            <Link href="Users" className="text-danger text-decoration-none">Users</Link>
          </ListGroupItem>
        )}
      </ListGroup>
    </div>
  );
}