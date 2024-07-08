import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies=useSelector((store)=>store.movies.upcoming);

  //fetchigin the list of now-playing movies from TMDB Api
  const getUpcomingMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";
    const response = await fetch(url, API_OPTIONS);
    const json = await response.json();

    console.log(json.results);

    //storing the fetched data into the moviesSlice
    dispatch(addUpcomingMovies(json.results));
  };


  /*
    implemented the memoization, since the data is already in the store, but if we visit homepage again , then the API requests will be made again and again
    and will override the same data again.
    hence to reduce this uneccesary requests, we only make API req when there is not data in store: MEMOIZATIOn, used already store data
*/  
  useEffect(() => {
  !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
