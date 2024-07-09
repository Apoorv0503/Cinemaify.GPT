import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  return (
    movies.nowPlaying && (
      <div className="bg-black mt-[-4rem]">
        {/* given -ve top margin so that this content float over the bottom of trailer, while the black bg will start after the trailer div */}
        <div className="md:-mt-52 mt-[15%] pb-4 pl-4 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
          <MovieList title={"Popular"} movies={movies.popular} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList title={"Upcoming"} movies={movies.upcoming} />
          <h3 className="text-center text-white">
            Created by{" : "}
            <a
              className="no-underline"
              href="https://www.linkedin.com/in/apoorva-dwivedi-6717b7185/"
              target="_blank"
            >
               Apoorva Dwivedi
            </a>
          </h3>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
