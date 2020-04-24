import React, { useState, createContext } from "react";
import MovieList from "./components/MovieList";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Fight Club",
      year: 1999,
      id: 69
    },
    {
      name: "Se7en",
      year: 1995,
      id: 70
    },
    {
      name: "Asur",
      year: 2019,
      id: 71
    }
  ]);
  return (
      <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
      </MovieContext.Provider>
  );
};
