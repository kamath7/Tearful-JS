import React , {useState, useContext} from 'react'
import Movie from './Movie';
import {MovieContext} from '../MovieContext';

const MovieList = ()=> {
    const [movies,setMovies] = useContext(MovieContext);
    return (
        <div>
         {movies.map(movie=>
             (<Movie key={movie.id} movieName={movie.name} releaseYear={movie.year}/>))}
        
        </div>
    )
}

export default MovieList;

   // {movies.map(movie=>
            //     (<Movie key={movie.id} movieName={movie.name} releaseYear={movie.year}/>))}