import { useState } from "react";

function AddPet({ onAddPet }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [house_trained, setHouse_trained] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        image: image,
        age: age,
        breed: breed,
        gender: gender,
        house_trained: house_trained
      }),
    })
      .then((res) => res.json())
    //   .then((newPet) => onAddPet(newPet));

    setName("");
    setImage("");
    setDescription("");
    setAge("");
    setGender("");
    setBreed("");
    setHouse_trained("");
  }

  return (
    <div className="new-pet-form">
      <h2 className="form-title">New Pet</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter a name for your pet"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter an image URL for your pet"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="form-label">Describe pet:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter the description for your pet"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="form-label">Age:</label>
          <textarea
            id="age"
            name="age"
            placeholder="Enter the Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-input"
          />
        </div>
         <div className="form-group">
          <label htmlFor="content" className="form-label">breed:</label>
          <textarea
            id="breed"
            name="breed"
            placeholder="Enter the breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="form-input"
          />
        </div>
         <div className="form-group">
          <label htmlFor="content" className="form-label">gender:</label>
          <textarea
            id="gender"
            name="gender"
            placeholder="Enter the gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="form-input"
          />
        </div>
         <div className="form-group">
          <label htmlFor="content" className="form-label">house_trained:</label>
          <textarea
            id="house_trained"
            name="house_trained"
            placeholder="Enter yes or no"
            value={house_trained}
            onChange={(e) => setHouse_trained(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-submit-btn">Add Pet</button>
      </form>
    </div>
  );
}

export default AddPet;