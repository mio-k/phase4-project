
import React, { useEffect, useState }  from "react";
import {useParams, Link} from "react-router-dom"

function User(){
  const {id} = useParams();
  const [member, setMember] = useState({
    id:0,
    firstname: "",
    lastname: "",
    dog: {
      name: "",
      breed: "",
      age:"",
      color: ""
    },
    items: ([])
  });

  useEffect (()=> {
    fetch(`/users/${id}`)
    .then((r) =>r.json())
    .then((individualMember) => setMember(individualMember))
  }, [])
console.log(member)
  return(
    <>
      <h2>Member {member.id}</h2>
      <p>Name: {member.firstname} {member.lastname}</p>
      <h3>{member.firstname}'s Dog</h3>
      <p>Name: {member.dog.name}</p>
      <p>Breed: {member.dog.breed}</p>
      <p>Age: {member.dog.age}</p>
      <p>Color: {member.dog.color}</p>
      <p>Free Items: </p>
      <ul>
      {member.items.map((item) => (
        <Link
        style={{ display: "block", margin: "1rem 0" }}
        to={`/items/${item.id}`}
        key={item.id}
        >
        <li>{item.name}</li>
      </Link>
      ))}
      </ul>
    </>
    )
}
export default User;