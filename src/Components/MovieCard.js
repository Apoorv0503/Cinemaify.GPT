import React from 'react'
import {IMG_CDN} from "../Utils/Constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 mr-4'>
        <img src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard