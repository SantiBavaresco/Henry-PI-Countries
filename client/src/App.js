import './App.css';
import React from "react";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';


import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import MainParallax from "./components/Parallax/MainParallax"
import Paralax from "./components/Parallax/Parallax"

import Countries from "./components/Countries/Countries";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {
  return (
    <div className="App">
      <h3>Henry Countries</h3>
      {/* <Paralax>
        <MainParallax></MainParallax>
      </Paralax> */}
      
      <NavBar/>
      <Routes>
             {/* <Route path="/" element={<Form Login={login}/>}/> */}
             
             <Route path="/" element={<Home />}/>
             <Route path="/countries" element={<Countries />}/>
             <Route path="/countries/:id" element={<CountryDetail />}/>


             {/* <Route path="/about" element={<About/>}/>
             <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
             <Route path="/detail/:detailId" element={<Detail/>}/>
             <Route path=":404" element={<Error404/>}/> */}

      </Routes> 
  
    </div>
  );
}

export default App;
