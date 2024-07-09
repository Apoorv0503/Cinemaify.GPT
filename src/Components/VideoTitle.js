import React from 'react';
import play from "../Assests/play-buttton.png";
import info from "../Assests/info-button.png";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] md:px-12 px-6 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='md:text-4xl text-2xl font-bold'>{title}</h1>
        <p className='md:block hidden pt-6 w-1/3'>{overview}</p>
        <div className='flex md:mt-6 mt-2'>

            <div 
            className='md:px-6 md:py-2 px-3 py-1 flex justify-center items-center bg-white text-black rounded-md cursor-pointer hover:bg-opacity-70'
            >
              <img className="md:w-6 w-3 inline mr-2"src={play} alt="play-btn"/>
              Play
            </div>
            <div className='md:block hidden mx-6 px-6 py-2 flex justify-center items-center bg-gray-400 text-white rounded-md  bg-opacity-50 cursor-pointer hover:bg-opacity-80'>
            <img className="w-8 inline mr-2" src={info} alt="info-btn"/>
              More Info
              </div>
        </div>
    </div>
  )
}

export default VideoTitle