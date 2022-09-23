import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import DogList from "./DogList";
import UserList from "./UserList";
import ItemList from "./ItemList"
import NewItemForm from "./NewItemForm";
import NewDogForm from "./NewDogForm";
import User from "./User";
import Dog from "./Dog";
import Item from "./Item";
import EditItem from "./EditItem";

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/authorized").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((allItems) => setItems(allItems));
  }, []);

  useEffect (() => {
    fetch('/tags')
    .then((r) => r.json())
    .then((allTags) => setTags(allTags))
  }, [])

  function onAddItem(newItem){
    setItems((prevItems) => {
      return [...prevItems, newItem]
    })
  }
  if (!user) return <Login onLogin={setUser} />;

  function onDeleteItem(id){
    setItems((prevItems) => {
      console.log(prevItems)
      console.log(id)
      return prevItems.filter(item => {
        return item.id != id
      })
    })
  }


  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <p>Welcome to Dog Pod free item exchange! This is where you can post the dog care goods you no longer needs so others can use them.</p>
      <main>
        <Routes>
          <Route path="doglist" element={<DogList/>} />
          <Route path="userlist" element={<UserList />} />
          <Route path="itemList" element={<ItemList items={items}/>} />
          <Route path="newitemform" element={<NewItemForm onAddItem={onAddItem} user={user} tags={tags}/>}/>
          <Route path="newdogform" element={<NewDogForm />} />
          <Route path="users/:id" element={<User />} />
          <Route path="dogs/:id" element={<Dog/>} />
          <Route path="items/:id" element={<Item onDeleteItem={onDeleteItem}/>} />
          <Route path="items/:id/edititem" element={<EditItem />} />

        </Routes>
        <Outlet />
      </main>
    </>
  );
}

export default App;
