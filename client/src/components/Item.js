import React, {useState, useEffect} from "react"
import EditItem from "./EditItem";
import {useNavigate, useParams} from "react-router-dom"
import { Button } from "../styles";

function Item(onDeleteItem){

  const {id} = useParams()
  const [item, setItem] = useState({
    name:"",
    description:"",
    user:"",
    tags: ([])
  });
    useEffect(()=> {
        fetch(`/items/${id}`)
        .then(r => r.json())
        .then(individualItem => setItem(individualItem))
    }, [])

    let navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    function handleDeleteClick() {
        fetch(`/items/${id}`, {
          method: "DELETE",
        })
        .then(() => navigate(`/itemlist`))
        .then(onDeleteItem(id))
      }
    function onUpdateItem(updatedItem) {
        setItem(updatedItem)
      }

    return(
        <div>
        {item ?  (
          <div>
          <p>Item: {item.name}</p>
          <p>Description: {item.description}</p>
          <p>Offered by: {item.user.firstname}</p>
          <ul>Category: {item.tags.map((tag) =>(
            <li>{tag.category}</li>))} </ul>
          {isEditing ? (
              <EditItem item={item} onUpdateItem={onUpdateItem} />
            ) : ("")
          }
          <Button onClick={handleDeleteClick}>Delete Item</Button>
          <Button onClick={() => setIsEditing((isEditing) => !isEditing)}>
               Edit Item
          </Button> </div>
          ): <p>No item from this user</p>}
      </div>
    );
}
export default Item;