import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full relative">
      <div>
        <video autoPlay muted loop className="w-full h-full">
          <source
            src="https://my-video-five.vercel.app/video/giphy%201.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute w-full top-0 bg-white/20 flex flex-col items-center justify-evenly h-full">
        <div className="flex flex-col items-center justify-evenly text-gray-100 w-3/5">
          <h1 className="text-5xl text-white-500 font-bold mb-4">
            WELCOME TO PETIFY
          </h1>
         <div  className="text-2xl text-center text-gray-50 mb-4">
         <p className="mb-4">
          PetFinder is an organization that is dedicated to providing healthy permanent home for all our animals as well as provide pet lovers with varied selection of pets to adopt.</p>.

         
         </div>
          
          <div className="flex space-x-2 justify-center">
           <Link to="/animalList">
           <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-10 text-1.8xl py-3 bg-cyan-400 text-gray-800 font-medium leading-tight rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-500 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Get Started
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
