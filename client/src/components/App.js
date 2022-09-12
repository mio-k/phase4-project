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

  useEffect(() => {
    // auto-login
    fetch("/authorized").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="doglist" element={<DogList />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="itemList" element={<ItemList />} />
          <Route path="newitemform" element={<NewItemForm />}/>
          <Route path="newdogform" element={<NewDogForm />} />
          <Route path="users/:id" element={<User />} />
          <Route path="dogs/:id" element={<Dog />} />
          <Route path="items/:id" element={<Item />} />
          <Route path="items/:id/edititem" element={<EditItem />} />

        </Routes>
        <Outlet />
      </main>
    </>
  );
}

export default App;
