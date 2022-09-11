import React, { useState } from "react";
import { Button, Input } from "../styles";

function NewItemForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tag_id: 0
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/items", {
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
        description: "",
        tag_id: 0
    })
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
    <h3>Add New Free Item to Share</h3>
    <p>Got a dog care item you don't need anymore? Offer it to your friends.</p>
      Item: <Input type="text" name="name" value={formData.name} onChange={handleChange}/><br/>
      Description: <Input type="text" name="description" value={formData.description} onChange={handleChange}/><br/>
      Category: <Input type="text" name="category" value={formData.category} onChange={handleChange}/><br/>
    <Button type="submit">Add Free Item</Button>
  </form>
  );
}

export default NewItemForm;