
import React, { useEffect, useState }  from "react";
import {useParams} from "react-router-dom"

function User(){
  const {id} = useParams();
  const [member, setMember] = useState("");

  useEffect (()=> {
    fetch(`/users/${id}`)
    .then((r) =>r.json())
    .then((individualMember) => setMember(individualMember))
  }, [])

  return(
    <>
      <h2>Member {member.id}</h2>
      <p>Name: {member.firstname} {member.lastname}</p>
      <h3>{member.firstname}'s Dog</h3>
      {/* <p>Name: {member.dog.name}</p>
      <p>Breed: {member.dog.breed}</p>
      <p>Age: {member.dog.age}</p>
      <p>Color: {member.dog.color}</p> */}
      <p>Free Items: </p>

 
    </>
    )
}
export default User;