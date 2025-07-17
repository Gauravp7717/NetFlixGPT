import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || !Array.isArray(movies)) return null; // 🔒 Guard clause

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll scroll-hide">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
