import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimalDetails() {
  let { id } = useParams();
  const [animal, setAnimal] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedAnimal, setEditedAnimal] = useState({});

  console.log(animal);
  
  useEffect(() => {
    
    fetch(`http://localhost:3000/pets/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimal(data);
        console.log(data);
        
      })
      .catch((error) => {
        console.log(error);
        
      });
  }, [id]);


  function handleEditClick() {
  setIsEditing(true);
}
  function handleChange(event) {
  const { name, value } = event.target;
  setEditedAnimal(prevState => ({
    ...prevState,
    [name]: value
  }));
}
function handleSubmit(event) {
  event.preventDefault();
  setIsLoading(true);
  fetch(`http://localhost:3000/pets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedAnimal)
  })
    .then(response => response.json())
    .then(data => {
      setAnimal(data);
      setEditedAnimal({});
      setIsEditing(false);
      setIsLoading(false);
    })
    .catch(error => {
      console.log(error);
      setIsLoading(false);
    });
}
 function handleCancelClick() {
  setEditedAnimal({});
  setIsEditing(false);
}


  
   function handleDeleteClick() {
    fetch(`http://localhost:3000/pets/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        // onDeleteBlog(id);
      
      }
    });
    
  }
  
  

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
      {isEditing ? (
  <div className="p-6 text-gray-700 mb-4 text-lg">
    <h3 className="text-3xl text-rose-500 font-bold ">Edit {name}</h3>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={editedAnimal.name || ""}
          onChange={handleChange}
        />
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          name="image"
          value={editedAnimal.image || ""}
          onChange={handleChange}
        />
        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={editedAnimal.breed || ""}
          onChange={handleChange}
        />
        <label htmlFor="age">age</label>
        <input
          type="text"
          id="age"
          name ="age"
          value={editedAnimal.age || ""}
          onChange={handleChange}
        />
        <label htmlFor="gender">gender</label>
        <input
          type="text"
          id="gender"
          name ="gender"
          value={editedAnimal.gender || ""}
          onChange={handleChange}
        />
        <label htmlFor="house_trained">house_trained</label>
        <input
          type="text"
          id="house_trained"
          name="house_trained"
          value={editedAnimal.house_trained || ""}
          onChange={handleChange}
        />
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          name ="description"
          value={editedAnimal.description || ""}
          onChange={handleChange}
        />

      
        
        <button className="primary" type="submit">
          Save Changes
        </button>
        <button className="primary" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </form>
  </div>
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
               onClick={handleEditClick}
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
