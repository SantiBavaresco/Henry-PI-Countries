import './App.css';
import React from "react";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';


import Home from "./components/Home/Home"
import Countries from "./components/Countries/Countries";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      
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
