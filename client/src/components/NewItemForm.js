import React, { useState } from "react";
import { Button, Error, Input, FormField, Label, Textarea } from "../styles";

function NewItemForm({ onLogin }) {
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        tag_id,
      }),
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
      Item: <input type="text" name="name" value={formData.name} onChange={handleChange}/><br/>
      Description: <input type="text" name="description" value={formData.description} onChange={handleChange}/><br/>
      Category: <input type="text" name="category" value={formData.category} onChange={handleChange}/><br/>
    <button type="submit">Add Free Item</button>
  </form>
  );
}

export default NewItemForm;