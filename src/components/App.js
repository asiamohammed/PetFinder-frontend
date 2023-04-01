import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AnimalList from "./AnimalList";
import Login from "./Login";
import AddPet from "./AddPet";
import AnimalDetails from "./AnimalDetails";


function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/animalList" element={<AnimalList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addPet" element={<AddPet />}></Route>
        <Route path="/animalDetails/:id" element={<AnimalDetails/>}></Route>
      </Routes>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
