import React, { useStat, useEffect } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";

function UserList(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/users")
          .then((r) => r.json())
          .then((allUsers) => setUsers(allUsers));
      }, []);

    return(
        <div className="list">
        <h2>Members</h2>
        <p>Choose a member to drill down to their record.</p>
        <ul>
          {users.map((user) => (
            <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/users/${user.id}`}
            key={user.id}
            >
            <li>{user.firstname}</li>
          </Link>
          ))} 
        </ul>
        <Outlet />
      </div>
    )
}
export default UserList;