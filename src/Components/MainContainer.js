import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from "./VideoBackground";
import { useSelector } from 'react-redux';

const MainContainer = () => {

  //got the now playing movies field from the movies slice of our store
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies);

  if(!movies){
    //if movies are not present, then do a early return.
    return;
  }

  const mainMovie=movies[4];
  const {original_title, overview, id }=mainMovie;

  //id is required to get the available list of videos from the movie id:
  

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer