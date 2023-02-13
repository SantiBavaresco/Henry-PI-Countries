import styles from '../stylesModules/Home.module.css';
// import MortyRojo from "../img/Morty-rojo.png";
// import MortyBlanco from "../img/Morty-blanco.png";
// import PepinilloRick from "../img/x.png";
import { NavLink } from 'react-router-dom';
//import { addFavorite, deleteFavorite } from "../redux/actions.js";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Home(p) {
    return (
        <div>
            <h1>Este es el home</h1>
        </div>
    );
}