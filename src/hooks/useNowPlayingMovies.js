import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies=useSelector((store)=>store.movies.nowPlaying);

  //fetchigin the list of now-playing movies from TMDB Api
  const getNowPlayingMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const response = await fetch(url, API_OPTIONS);
    const json = await response.json();

    console.log(json.results);

    //storing the fetched data into the moviesSlice
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
