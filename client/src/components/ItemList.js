import React from "react";
import { Link, Outlet } from "react-router-dom";

function ItemList({items}){

    return(
        <div className="list">
        <h2>Free Dog Care Items</h2>
        <p>Click on the item to learn more.</p>
        <ul>
          {items.map((item) => (
            <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/items/${item.id}`}
            key={item.id}
            item={item}
            >
            <li>{item.name}</li>
          </Link>
          ))} 
        </ul>
        <Outlet />
      </div>
    )
}
export default ItemList;