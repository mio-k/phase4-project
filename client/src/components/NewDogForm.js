import React, { useState } from "react";
import { Button, Input } from "../styles";

function NewDogForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: 0,
    color: ""
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((r) => r.json)
    .then((formData) => onAddItem(formData))
    setFormData({
        name: "",
        breed: "",
        age: 0,
        color:""
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
    <h3>Add a new dog</h3>
    <p>Add your dog's info</p>
      Dog's name: <Input type="text" name="name" value={formData.name} onChange={handleChange}/><br/>
      Breed: <Input type="text" name="breed" value={formData.breed} onChange={handleChange}/><br/>
      Age: <Input type="number" name="age" value={formData.age} onChange={handleChange}/><br/>
      Color: <Input type="text" name="color" value={formData.color} onChange={handleChange}/><br/>
    <Button type="submit">Add Your Dog</Button>
  </form>
  );
}

export default NewDogForm;