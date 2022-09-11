import React from "react"
import EditItem from "./EditItem";
import {useNavigate} from "react-router-dom"

function Item(item, handleUpdateItem, onDeleteItem){

    let navigate = useNavigate();

    function handleDeleteClick() {
        fetch(`/items/:id`, {
          method: "DELETE",
        })
        .then(() => navigate(`/items`))
          onDeleteItem(item_id);
      }
    function onUpdateItem(updatedItem) {
        handleUpdateItem(updatedItem);
      }

    return(
        <div>
        {item ?  (
          <div><h2>Item {item_id} from {user.firstname}</h2>
          <p>Item: {item.name}</p>
          <p>Quantity: {item.description}</p>
          <p>Type: {item.category}</p>
          {isEditing ? (
              <EditItem item={item} handleUpdateItem={onUpdateItem} />
            ) : ("")
          }
          <button onClick={handleDeleteClick}>Delete Item</button>
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
               Edit Item
          </button> </div>
          ): <p>No item from this user</p>}
      </div>
    );
}
export default Item;