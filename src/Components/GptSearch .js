import React from 'react';
import GptSearchBar from './GptSearchBar';
import HomeBackground from "../Assests/homeBackground.jpg";
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch  = () => {
  return (
    <div>
      <div className="md:w-full fixed -z-10">
        <img src={HomeBackground} className="md:w-full h-screen object-cover" alt="home-background" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  ) 
}

export default GptSearch 