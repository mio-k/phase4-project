import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function DogList() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch("/dogs")
      .then((r) => r.json())
      .then((allDogs) => setDogs(allDogs));
  }, []);
  
    return (
      <div>
        <h2>Our Dogs</h2>
        <ul>
        {dogs.map((dog) => (
          <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/dogs/${dog.id}`}
          key={dog.id}
          >
          <li>{dog.name}</li>
        </Link>
        ))}
        </ul>
      <Outlet />
    </div>
    )
}
export default DogList;