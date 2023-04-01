import React from "react";
import { Link } from "react-router-dom";

const Animal = ({ image, breed, name, id}) => {
  return (
    <div>
      <div className="flex flex-wrap align-items-center hover:scale-110 p-4">
        <div className="rounded-lg shadow-xl bg-white h-64 w-48">
          <Link to={`/animalDetails/${id}`} data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className=" h-2/3 rounded-t-lg w-full " src={image} alt="" />
          </Link>
          <div className="p-2">
            <h4 className="text-cyan-900 text-l font-bold">{name}</h4>
            <p className="text-gray-700 text-base">{breed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animal;
