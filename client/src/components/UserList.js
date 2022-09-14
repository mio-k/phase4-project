import React from "react";
import { Link, Outlet } from "react-router-dom";

function UserList({users}){
console.log(users)
    return(
        <div className="list">
        <h2>Members</h2>
        <p>Choose a member to drill down to their record.</p>
        <ul>
          {users.map((user) => {
            console.log(user)
            return (
            <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/users/${user.id}`}
            // to='/users/1'
            key={user.id}
            >
            <li>{user.firstname}</li>
          </Link>
          )}
          )} 
        </ul>
        <Outlet />
      </div>
    )
}
export default UserList;