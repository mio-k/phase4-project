import React, { useState } from "react";
import { Button, Input } from "../styles";
import {useNavigate } from "react-router-dom";


function NewItemForm({onAddItem, user}) {

  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [user_id, setUser_id] = useState(user.id);
  const [tags, setTags] = useState([]);
  const [newItem, setNewItem] = useState({});


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
        user_id,
        tags,
      }),
    })
    .then((r) => r.json())
    .then((newItem) => setNewItem(newItem))
    navigate("/items")
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
    <h3>Add New Free Item to Share</h3>
    <p>Got a dog care item you don't need anymore? Offer it to your friends.</p>
      Item: <Input 
                type="text" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            /><br/>
      Description: <Input 
                      type="text" 
                      name="description" 
                      value={description} 
                      onChange={(e) => setDescription(e.target.value)}
                    /><br/>
    <p>Category:
        <select multiple={true} onChange={(e) => setTags(e.target.value)}>
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