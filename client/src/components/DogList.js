import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function DogList() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch("/dogs")
          .then((r) => r.json())
          .then((allDogs) => setDogs(allDogs));
      }, []);

    return (
      <div className="list">
      <h2>Member Dogs</h2>
      <p>Choose a dog to drill down to their record.</p>
      <ul>
        {dogs.map((dog) => (
          <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/dogs/${dog.id}`}
          key={dog.id}
          dog={dog}
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