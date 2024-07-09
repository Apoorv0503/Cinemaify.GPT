import React from 'react';
import MovieList from './MovieList';
import { useDispatch,useSelector } from 'react-redux';

const GptMovieSuggestions = () => {
    const {movieNames,movieResults} = useSelector((Store)=>Store.gpt);

    console.log(movieNames);

    //initially when GptSearch is rendered, there will be nothing in the redux store, hence we need to handle this case
    if (!movieNames) return null;
  return (
    <div className='bg-black opacity-90 md:my-6 md:mx-8 md:p-6 mx-3 my-4 p-4 mt-[5%]'>
        {
            movieNames.map((movieName, index)=>
                <MovieList key={movieName+index} title={movieName} movies={movieResults[index]}/>
            )
        }
            
    </div>
  )
}

export default GptMovieSuggestions