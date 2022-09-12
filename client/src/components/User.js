import React from "react"
function User(user){

    return(
        <>
        <h2>User {user.id}</h2>
        <p>Name: {user.firstname} {user.lastname}</p>
        <h3>{user.firstname}'s Dog</h3>
        {/* <p>Name: {user.dog.name}</p>
        <p>Breed: {user.dog.breed}</p>
        <p>Age: {user.dog.age}</p>
        <p>Color: {user.dog.color}</p> */}
        </>
    )
}
export default User;