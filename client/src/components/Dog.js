import React from "react"
function Dog(dog){

    return(
        <>
        <h2>Dog {dog.id}</h2>
        <p>Name: {dog.name}</p>
        <p>Breed: {dog.breed}</p>
        <p>Age: `${dog.age} years old`</p>
        <p>Color: {dog.color}</p>k
        </>
    )
}
export default Dog;