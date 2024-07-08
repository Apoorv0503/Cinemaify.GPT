import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies=useSelector((store)=>store.movies.topRated)

  //fetchigin the list of now-playing movies from TMDB Api
  const getTopRatedMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";
    const response = await fetch(url, API_OPTIONS);
    const json = await response.json();

    console.log(json.results);

    //storing the fetched data into the moviesSlice
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
