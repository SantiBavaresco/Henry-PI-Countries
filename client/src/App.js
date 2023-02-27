import './App.css';
import React from "react";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';


import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import ActivityCreator from "./components/ActivityCreator/ActivityCreator"
import AdvancedActivityCreator from "./components/AdvancedActivityCreator/AdvancedActivityCreator"
import Error404 from "./components/Error404/Error404"



import MainParallax from "./components/Parallax/MainParallax"
// import Paralax from "./components/Parallax/Parallax"

import Countries from "./components/Countries/Countries";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {
  return (
    <div className="App">
      {/* <h3>Henry Countries</h3> */}
      {/* 
        <MainParallax></MainParallax>*/}
      {/* <Paralax></Paralax>  */}
      
      <NavBar/>
      <Routes>
             {/* <Route path="/" element={<Form Login={login}/>}/> */}
             
             <Route path="/" element={<Home />}/> 
             <Route path="/countries" element={<Countries />}/>
             <Route path="/country/:id" element={<CountryDetail />}/>
             <Route path="/activityCreator" element={<ActivityCreator />}/> 
             <Route path="/advancedActivityCreator" element={<AdvancedActivityCreator />}/>
             {/* <Route path="/mapita" element={<Mapita/>}/> */}



             <Route path=":404" element={<Error404/>}/> 

             {/* <Route path="/about" element={<About/>}/>
             <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
             <Route path="/detail/:detailId" element={<Detail/>}/>
             <Route path=":404" element={<Error404/>}/> */}

      </Routes> 
  
    </div>
  );
}

export default App;
