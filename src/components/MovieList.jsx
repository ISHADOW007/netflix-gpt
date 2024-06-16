import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Logging the movies and title for debugging purposes
 
  return (
    <div className="px-6 ">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
      {/* Displaying the title */}
      <div className="flex overflow-x-scroll ">
        
        {/* Displaying the movie posters if available */}
        <div className="flex">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;
