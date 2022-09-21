import React, { useState } from "react";
import { Button, Input } from "../styles";

function NewItemForm({onAddItem, user, tags}) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    user_id: user.id,
    tags:[]
  })
  // console.log(tags[0].category)

  function handleChange(e){
    console.log(e.target.value)
    if (e.target.name == tags) {
      tags.category.push(e.target.value)
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((r) => r.json())
    .then((formData) => onAddItem(formData))
    setFormData({
        name: "",
        description: "",
        tags:[]
    })
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
    <h3>Add New Free Item to Share</h3>
    <p>Got a dog care item you don't need anymore? Offer it to your friends.</p>
      Item: <Input type="text" name="name" value={formData.name} onChange={handleChange}/><br/>
      Description: <Input type="text" name="description" value={formData.description} onChange={handleChange}/><br/>
      <p>Category:
        <select multiple={true} name="tags" onChange={handleChange}>
          <option value="walking">Walking</option>
          <option value="grooming">Grooming</option>
          <option value="food">Food</option>
          <option value="puppy_care">Puppy Care</option>
          <option value="play">Play</option>
        </select>
    </p>
    <Button type="submit">Add Free Item</Button>
  </form>
  );
}

export default NewItemForm;
