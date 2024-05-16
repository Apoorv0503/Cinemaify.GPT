import React from 'react';
import play from "../Assests/play-buttton.png";
import info from "../Assests/info-button.png";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[22%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='pt-6 w-1/3'>{overview}</p>
        <div className='flex mt-6'>

            <div 
            className='px-6 py-2 flex justify-center items-center bg-white text-black rounded-md cursor-pointer hover:bg-opacity-70'
            >
              <img className="w-6 inline mr-2"src={play} alt="play-btn"/>
              Play
            </div>
            <div className='mx-6 px-6 py-2 flex justify-center items-center bg-gray-400 text-white rounded-md  bg-opacity-50 cursor-pointer hover:bg-opacity-80'>
            <img className="w-8 inline mr-2" src={info} alt="info-btn"/>
              More Info
              </div>
        </div>
    </div>
  )
}

export default VideoTitle