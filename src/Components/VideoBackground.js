import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  console.log(trailerVideo);
  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&controls=0&loop=1"}
        
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// https://www.youtube.com/embed/Kdr5oedn7q8?si=4PPb2nYpbZsqB49N
