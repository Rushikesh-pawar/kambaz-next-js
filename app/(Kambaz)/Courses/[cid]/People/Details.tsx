import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as client from "../../../Account/client";
import { FaCheck, FaPencil } from "react-icons/fa6";
import { FormControl, Form } from "react-bootstrap";

export default function PeopleDetails({ uid, onClose }: { uid: string | null; onClose: () => void; }) {
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);

  const roles = ["FACULTY", "STUDENT", "TA", "ADMIN"];

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    onClose();
  };

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    onClose();
  };

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email);
    setRole(user.role);
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  if (!uid) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={onClose} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" />
      </button>

      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />

      <div className="text-danger fs-4 wd-name">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}
        {editing && (
          <FaCheck
            onClick={() => saveUser()}
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}

        {!editing ? (
          <div className="wd-name">{user.firstName} {user.lastName}</div>
        ) : (
          <FormControl
            className="w-100 wd-edit-name mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveUser();
            }}
            placeholder="First Last Name"
          />
        )}
      </div>

      <b>Roles:</b>
      {!editing ? (
        <span className="wd-roles">{role}</span>
      ) : (
        <Form.Select
          className="w-100 wd-edit-role mt-1 mb-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </Form.Select>
      )}
      <br />
      <b>Login ID:</b>
      <span className="wd-login-id">{user.loginId}</span>
      <br />
      <b>Email:</b>
      {!editing ? (
        <span className="wd-email">{email}</span>
      ) : (
        <FormControl
          className="w-100 wd-edit-email mt-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveUser();
          }}
          placeholder="Email"
          type="email"
        />
      )}
      <br />
      <b>Section:</b>
      <span className="wd-section">{user.section}</span>
      <br />
      <b>Total Activity:</b>
      <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />

      <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete">
        Delete
      </button>
      <button onClick={onClose} className="btn btn-secondary float-end me-2 wd-cancel">
        Cancel
      </button>
    </div>
  );
}