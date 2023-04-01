import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimalDetails(onDeleteBlog) {
  let { id } = useParams();
  const [animal, setAnimal] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // console.log(animals);
   function handleDeleteClick() {
    fetch(`http://localhost:3000/pets/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        onDeleteBlog(id);
      }
    });
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/pets/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimal(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  const {
    image,
    name,
    house_trained,
    breed,
    age,
    gender,
    description,
    
  } = animal;

  return (
    <div className="flex justify-center h-full my-5 w-full">
      {isLoading ? (
        <p>Loading ....</p>
      ) : (
        <>
          {animal && (
            <div className="rounded-lg shadow-lg bg-gray-200 w-1/2">
              <img
                src=
                  {image}
                
                alt={name}
                className="transition ease-in-out delay-150 h-96 rounded-full w-96 m-auto mt-4 hover:scale-105"
              />
              <div className="p-6 text-gray-700 mb-4 text-lg">
              <div className="flex flex-col">
                <h3 className="text-3xl text-rose-500 font-bold ">{name}</h3>
                <p className="text-xl">Breed: {breed}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>House trained: {house_trained ? "Yes" : "No"}</p>
              </div>
              
                <div className="mt-2">
                <h3 className="text-gray-600 text-2xl font-medium mb-2 border border-b-gray-300 w-full">
                  About {name}
                </h3>
                <p>{description}</p>
                </div>
               <div className="text-gray-700 text-base mb-4 flex w-full justify-around mt-11">
               
               <button className="primary" 
              //  onClick={handleEditClick}
               >
            Edit 
          </button>
          <button className="primary" 
          onClick={handleDeleteClick}>Delete</button>
        
                
               
               </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AnimalDetails;
