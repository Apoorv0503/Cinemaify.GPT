import React from 'react';
import Header from './Header';
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch ';
import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

  useNowPlayingMovies();   
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  //do not call hook inside a loop, not possible bcz it will create abnormal behaviour
  // for(let i=0;i<movieCategies.length;i++){
  //   useFetchMovies(movieCategies[i]);
  // }

  //to get a particular state in store -> return store.ReducerNameInStore.state
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
 

  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
}

export default Browse;