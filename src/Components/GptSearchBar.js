import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstants";
// import openai from "../Utils/openai";
// import useGeminiAPI from "../hooks/useGeminiAPI";
import { GEMINIAI_KEY } from "../Utils/Constants";
import { geminiURL } from "../Utils/Constants";
import { API_OPTIONS } from "../Utils/Constants";
import {movieSearchURL} from "../Utils/Constants";
import {addGptMovieResult} from "../Utils/gptSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchBar = () => {
    const[isInputFound,setIsInputFound]=useState(false);
  const searchText = useRef(null);

  //get the currently selected language from the redux store's config slice
  const langKey = useSelector((store) => store.config.lang);
  const dispatch=useDispatch();

  //function to  make get call and search for a particular movie in TBDB database
const searchMovieTMDB=async(movie)=>{
    try{
        const result=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json= await result.json();
    // console.log(json.results);

    return json.results;
    }
    catch(error){
        console.log(error);
    }
}

//give user input query to gpt/gemini api
  const handleGptSearchClick = async () => {

    //gemini request query --> give more descriptive query as it is gimini ;(
    const Query =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.";

    setIsInputFound(true);

    //data to be send to the gemini api
    const data = {
      contents: [
        {
          parts: [
            {
              text: Query,
            },
          ],
        },
      ],
    };

    //actual reqiest to gemini api
    // try {
      const finalURL = geminiURL + GEMINIAI_KEY;

      const response = await fetch(finalURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("result of query: ",result);

        // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan : we will convert this string into an array
      const gptMovies =result.candidates[0].content.parts[0].text.split(",");
      console.log("gptMovies: ",gptMovies);
        // gptmovies:  ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]\

        //now, we will search these above movies into tmdb database and show result to user, promise array will have 5 promises/objects in it
        const promiseArray=gptMovies.map((movie)=>(
            searchMovieTMDB(movie)
        ));

        const tmdbResults = await Promise.all(promiseArray);
        console.log("tmdbResults: ",tmdbResults);

        // here, gptMovies: movies given by gemini according to user toHaveDescription
        // and tmdbResults: movies found in tmdb for  all 5 movies given by gemini

        //now trigger an action to add these details to gpt slice in redux store
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <div className="pt-[10%] flex justify-center items-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="col-span-9 p-2 m-2"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="p-2 m-2 bg-red-600 text-white rounded-md col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
      
    </div>
  );
};

export default GptSearchBar;
