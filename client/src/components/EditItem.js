import React, {useState} from "react"
import {useParams, useNavigate } from "react-router-dom";

function EditItem(item, onUpdateItem){
    let navigate = useNavigate();
    const [revisedData, setRevisedData] = useState({
        name: item.name,
        description: item.description,
    })
    let {item_id} = useParams();

    function handleFormSubmit(e) {
        e.preventDefault();
        fetch(`/items/${item_id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: revisedData.name,
            description: revisedData.description,
          }),
        })
          .then((r) => r.json())
          .then((revisedData) => {
            onUpdateItem(revisedData)
            navigate("/items/${item_id}")
          })
      }
    return(
        <form className="edit-order" onSubmit={handleFormSubmit}>
        Item Name: <input type="text" name="name" value={revisedData.name} onChange={(e) => setRevisedData((previousRevisedData) => ({...previousRevisedData, item: e.target.value}))} />
        description: <input type="text" name="description" value={revisedData.description} onChange={(e) => setRevisedData((previousRevisedData) => ({...previousRevisedData, description: e.target.value}))} />
        <input type="submit" value="Save" />
      </form>
    )
}
export default EditItem;