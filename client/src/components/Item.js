import React, {useState} from "react"
import EditItem from "./EditItem";
import {useNavigate, useParams} from "react-router-dom"
import { Button } from "../styles";

function Item({items, handleUpdateItem, onDeleteItem}){

  const {id} = useParams()
  let item = items.find((itemInArray) => {
      return itemInArray.id === id;
  })

    let navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    function handleDeleteClick() {
        fetch(`/items/:id`, {
          method: "DELETE",
        })
        .then(() => navigate(`/items`))
          onDeleteItem(item.id);
      }
    function onUpdateItem(updatedItem) {
        handleUpdateItem(updatedItem);
      }

    return(
        <div>
        {item ?  (
          <div>
          <p>Item: {item.name}</p>
          <p>Description: {item.description}</p>
          {/* <p>Offered by: {item.user.firstname}</p>
          <p>Category: {item.tags.category}</p> */}
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