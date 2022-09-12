import React from "react"
function User(user){

    return(
        <>
        <h2>User {user.id}</h2>
        <p>Name: {user.firstname}</p>
        </>
    )
}
export default User;