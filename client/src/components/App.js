import React, { useEffect, useState } from "react";
import { Route, RouteProps, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import RecipeList from "../pages/RecipeList";
import NewRecipe from "../pages/NewRecipe";

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
          {/* <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route> */}
        </Routes>
        <Outlet />
      </main>
    </>
  );
}

export default App;
