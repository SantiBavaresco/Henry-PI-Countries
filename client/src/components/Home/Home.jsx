import styles from './Home.module.css';
// import MortyRojo from "../img/Morty-rojo.png";
// import MortyBlanco from "../img/Morty-blanco.png";
// import PepinilloRick from "../img/x.png";
import { NavLink } from 'react-router-dom';
//import { addFavorite, deleteFavorite } from "../redux/actions.js";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, getActivities } from "../../redux/actions";
import Paralax from "../Parallax/Parallax"

import NavBar from "../NavBar/NavBar"
// import Paralax from "../Parallax/Parallax"




function onSearch() {};
    
function Home() {

    const dispatch = useDispatch()
  
    async function getCountries() {
      await dispatch( getAllCountries() ) 
      await dispatch( getActivities() )
      // console.log("1")
    }

    // //const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch ( getCountries() );
    // }, []);

    return (
      <div className="Home" >
        
        {/* <h1>Bienvenidos</h1> */}
        {/* <Paralax></Paralax> */}
        <h1>HOLA QUE TAL</h1> 
        <h1>HOLA QUE TAL</h1> 
        <h1>HOLA QUE TAL</h1> 
        <h1>HOLA QUE TAL</h1> 
        <h1>HOLA QUE TAL</h1> 
        <h1>HOLA QUE TAL</h1> 
        <h1>HOLA QUE TAL</h1> 
        <h1>HOLA QUE TAL</h1> 
        <h1>HOLA QUE TAL</h1> 
        <h1>HOLA QUE TAL</h1> 
        <h1>HOLA QUE TAL</h1> 
        
        <Link to={"/countries"}>

          <button onClick={getCountries}>Ingresar</button>

        </Link>
        <Outlet />
      </div>
    );
  }
  
  export default Home;
  
  