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
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo"
import LogoHenry from "../../img/LogoHenry.png";

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
      <div className={styles.home} >
       {/* <BackgroundVideo/> */}
        {/* <h1>Bienvenidos</h1> */}
        {/* <Paralax></Paralax> */}
        <h1>hola</h1>

        <img src={LogoHenry} className={styles.image1}/>
        <h1 className={styles.textP}>
           We are delighted to have you here and hope that you will find this website informative and helpful in discovering all that our country has to offer.

          Earth is a land of diversity, with breathtaking landscapes, rich cultural heritage, and warm and welcoming people. Whether you are interested in exploring our cities, immersing yourself in our history, or enjoying the great outdoors, there is something for everyone. </h1> 


        <Link to={"/countries"} style={{display:"flex", justifyContent: "center", paddingBottom: "10px"}}>

          <button onClick={getCountries} style={{height:"40px", width:"160px", margin: "10px"}}> Get Started</button>

        </Link>
        <Outlet />
      </div>
    );
  }
  
  export default Home;
  
  