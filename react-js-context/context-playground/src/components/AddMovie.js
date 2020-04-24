import React, { useState, useContext } from "react";
import { MovieContext } from "../MovieContext";
const AddMovie = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };
  const updateYear = e => {
    setYear(e.target.value);
  };
  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name, year }]);
  };
  return (
    <div>
      <form onSubmit={addMovie}>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="text" name="year" value={year} onChange={updateYear} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
