import React from 'react'
import {IMG_CDN} from "../Utils/Constants";
import defaultMovie from '../Assests/defaultMovie.jpg'

const MovieCard = ({posterPath}) => {

  console.log(posterPath);
  const imageUrl = posterPath ? IMG_CDN+posterPath : defaultMovie;
  return (
    <div className='w-32 md:w-40 mr-5 transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-lg'>
      <img src={imageUrl} alt="Movie poster" className="w-full rounded-lg" />
    </div>
  )
}

export default MovieCard