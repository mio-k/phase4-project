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
  const [dogs, setDogs] = useState([]);
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
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
    fetch("/dogs")
      .then((r) => r.json())
      .then((allDogs) => setDogs(allDogs));
  }, []);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((allItems) => setItems(allItems));
  }, []);

  useEffect (()=> {
    fetch("/users")
    .then((r) =>r.json())
    .then((allUsers) => setUsers(allUsers))
  }, [])

  useEffect (() => {
    fetch('/tags')
    .then((r) => r.json())
    .then((allTags) => setTags(allTags))
  }, [])

  if (!user) return <Login onLogin={setUser} />;

  function onAddItem(newItem){
    setItems((prevItems) => {
      return [...prevItems, newItem]
    })
  }

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="doglist" element={<DogList dogs={dogs}/>} />
          <Route path="userlist" element={<UserList users={users} />} />
          <Route path="itemList" element={<ItemList items={items} tags={tags} />} />
          <Route path="newitemform" element={<NewItemForm onAddItem={onAddItem} user={user} tags={tags}/>}/>
          <Route path="newdogform" element={<NewDogForm />} />
          <Route path="users/:id" element={<User />} />
          <Route path="dogs/:id" element={<Dog dogs={dogs}/>} />
          <Route path="items/:id" element={<Item items={items} tags={tags}/>} />
          <Route path="items/:id/edititem" element={<EditItem />} />

        </Routes>
        <Outlet />
      </main>
    </>
  );
}

export default App;
