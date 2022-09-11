import React from "react"
function User(user){

    return(
        <>
        <h2>User {user_id}</h2>
        <p>Name: `${user.firstname} ${user.lastname}</p>
        </>
    )
}
export default User;