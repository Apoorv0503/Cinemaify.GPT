import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 md:mb-12 mb-10">
      <h1 className="md:text-3xl text-xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
         {/* movies card container */}
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
