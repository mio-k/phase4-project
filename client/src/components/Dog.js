import React from "react"
import {useParams} from "react-router-dom"

function Dog({dogs}){
    const {id} = useParams()
    let dog = dogs.find((dogInArray) => {
        return dogInArray.id === id;
    })
    return(
        <>
        <h2>Dog {dog.id}</h2>
        <p>Name: {dog.name}</p>
        <p>Breed: {dog.breed}</p>
        <p>Age: {dog.age} years old</p>
        <p>Color: {dog.color}</p>
        <p>Owner: {dog.user.firstname}</p>
        </>
    )
}
export default Dog;