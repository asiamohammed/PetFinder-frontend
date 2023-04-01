import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="w-full flex items-center justify-center bg-yellow-400 text-gray-700 shadow-lg">
        <div className="container-fluid w-4/6 flex justify-evenly items-center ">
          <div className="text-xl hover:text-rose-500 font-semibold">
            <Link to="/">
              
              <p>PetFinder</p>
            </Link>
          </div>
          <div>
            <Link
              className="text-xl hover:text-rose-500 font-semibold"
              to="/animalList"
            >
              Find A Pet
            </Link>
          </div>
           <div>
            <Link
              className="text-xl hover:text-rose-500 font-semibold"
              to="/addpet"
            >
              Add A Pet
            </Link>
          </div>
          
          <div>
            <Link
              className="text-xl hover:text-rose-500 font-semibold"
              to="/login"
            >
              Login/Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
