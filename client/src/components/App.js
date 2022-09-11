import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import DogList from "./DogList";
import UserList from "./UserList";
import ItemList from "./ItemList"
import NewItemForm from "./NewItemForm";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
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
        </Routes>
        <Outlet />
      </main>
    </>
  );
}

export default App;
