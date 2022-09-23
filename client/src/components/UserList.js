import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function UserList(){

  const [users, setUsers] = useState([]);

  useEffect (()=> {
    fetch("/users")
    .then((r) =>r.json())
    .then((allUsers) => setUsers(allUsers))
  }, [])

    return(
      <>
      <h1>Welcome to DogPod Free Item Exchange</h1>
      <p>Welcome to Dog Pod free item exchange! This is where you can post the dog care goods you no longer needs so others can use them.</p>
      <p>Did your dog grow out of a harness? Did the food you purchased recently didn't agree with your pup? Offer it to other members here!</p>
        <div className="list">
        <h2>Meet the Members</h2>
        <p>Choose a member to drill down to their record.</p>
        <ul>
          {users.map((user) => {
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
      </>
    )
}
export default UserList;