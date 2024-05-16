import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);


  const getMovieVideos = async () => {
    // we will get all the videos related to a movie here.
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    //searching for trailer video in all available videos
    const filterData = json.results.filter((movie) => movie.type === "Trailer");

    //when no trailers found, then just take the first video
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);

    //store the tariler video info in our redux store, (generally we store such things in our state)
    //passed tailer as a payload to "addTrailerVideo" action.
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
