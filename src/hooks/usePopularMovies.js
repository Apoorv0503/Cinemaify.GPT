import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies=useSelector((store)=>store.movies.popular)

  //fetchigin the list of now-playing movies from TMDB Api
  const getPopularMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?page=1";
    const response = await fetch(url, API_OPTIONS);
    const json = await response.json();

    console.log(json.results);

    //storing the fetched data into the moviesSlice
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
