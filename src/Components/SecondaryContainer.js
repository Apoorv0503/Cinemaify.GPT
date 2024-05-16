import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const movies=useSelector((store)=>store.movies);

  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      {/* given -ve top margin so that this content float over the bottom of trailer, while the black bg will start after the trailer div */}
      <div className='-mt-52 pl-4 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer