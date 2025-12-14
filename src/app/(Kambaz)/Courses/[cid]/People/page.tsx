// app/(kambaz)/Courses/[cid]/People/page.tsx
"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./Table/page";
import * as client from "../../client";
import * as accountClient from "../../../Account/client";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";

export default function CoursePeople() {
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);
    const [allUsers, setAllUsers] = useState<any[]>([]);

    const [role, setRole] = useState("");
    const [name, setName] = useState("");

    const fetchUsers = async () => {
        try {
            // This will only get users enrolled in this specific course
            const enrolledUsers = await client.findUsersForCourse(cid as string);
            setAllUsers(enrolledUsers);
            setUsers(enrolledUsers);
        } catch (error) {
            console.error("Error fetching users for course:", error);
        }
    };

    const createUser = async () => {
        const user = await accountClient.createUser({
            firstName: "New",
            lastName: `User${allUsers.length + 1}`,
            username: `newuser${Date.now()}`,
            password: "password123",
            email: `email${allUsers.length + 1}@neu.edu`,
            section: "S101",
            role: "STUDENT",
        });
        // enroll the new user in this course
        if (cid) {
            await client.enrollInCourse(user._id, cid as string);
        }
        const updated = [...allUsers, user];
        setAllUsers(updated);
        setUsers(updated);
    };

    const filterUsersByName = (n: string) => {
        setName(n);
        if (!n) {
            setUsers(allUsers);
            return;
        }
        const filtered = allUsers.filter((u: any) => {
            const full = `${u.firstName || ''} ${u.lastName || ''}`.toLowerCase();
            return full.includes(n.toLowerCase());
        });
        setUsers(filtered);
    };

    const filterUsersByRole = (r: string) => {
        setRole(r);
        if (!r) {
            setUsers(allUsers);
            return;
        }
        const filtered = allUsers.filter((u: any) => (u.role || '').toLowerCase() === r.toLowerCase());
        setUsers(filtered);
    };

    useEffect(() => {
        fetchUsers();
    }, [cid]);

    return (
        <div className="p-4">
            <h3>People</h3>
            <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
                <FaPlus className="me-2" />
                Add People
            </button>

            <FormControl onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
                className="float-start w-25 me-2 wd-filter-by-name" />

            <select value={role} onChange={(e) => filterUsersByRole(e.target.value)}
                className="form-select float-start w-25 wd-select-role" >
                <option value="">All Roles</option>
                <option value="STUDENT">Students</option>
                <option value="TA">Assistants</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Administrators</option>
            </select>

            <PeopleTable users={users} fetchUsers={fetchUsers} />
        </div>
    );
}
