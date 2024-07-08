import React from 'react';
import MovieList from './MovieList';
import { useDispatch,useSelector } from 'react-redux';

const GptMovieSuggestions = () => {
    const {movieNames,movieResults} = useSelector((Store)=>Store.gpt);

    console.log(movieNames);

    //initially when GptSearch is rendered, there will be nothing in the redux store, hence we need to handle this case
    if (!movieNames) return null;
  return (
    <div className='bg-black opacity-90 m-6 p-6 mt-[5%]'>
        {
            movieNames.map((movieName, index)=>
                <MovieList title={movieName} movies={movieResults[index]}/>
            )
        }
            
    </div>
  )
}

export default GptMovieSuggestions