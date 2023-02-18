//import SearchBar from './SearchBar.jsx';
//import styles from '../stylesModules/NavBar.module.css';
//import Titulo from "../img/Rick-and-Morty.png";

//import styles from "./NavBar.module.css";



// export default function NavSeachBar(props) {
//     const {onSearch} = props;
//     //const {onSearch} = props;
//    const [userInput, setUserInput] = useState("");

//    //const handleFormValueChange = (evento) => setUserInput(evento.target.value);
//    function handleChange(evento){
//       // cuando ocurra un cambio en el valuue del input,
//       // tomar ese value y guardarlo en el estado del userInput
//       setUserInput(evento.target.value);
//    }
//    function clearInput() {  // vacia el input
//       setUserInput("");
//    }
//    function getRandomInt(max) {
//        return Math.floor(Math.random() * max) + 1;
//     }
 
//     return (
//        <div className={styles.divBienvenido} >
//           {/* <img src={Titulo} style={{height: 100}}/> */}
//           <span style={{display:"flex", justifyContent: "right", alignItems: "center"}}>
 
//              <Link to={"/home"}>
//                 <img src={logo} className={styles.hvr_buzz} style={{height: 80, justifyContent: "center  ", alignItems: "center"}}/>
//                 {/* <button className={styles.button} >Home </button> */}
//              </Link>
         
//              <Link to={"/favorites"}>
//                 <button className={styles.hvr_sweep_to_bottom} 
//                 // style={{backgroundColor: "#4ca8af"}}
//                 >Favorites </button>
//              </Link>
 
//              <Link to={"/about"}>
//                 <button className={styles.hvr_radial_in} >About </button>
//              </Link>
 
//              <Link to={"/"}>
             
//                 <button className={styles.hvr_bounce_to_left} >Logout </button>
//              </Link>
             
//           </span>
          
//              {/* <SearchBar onSearch={onSearch} />  */}
//              <span className={styles.searchBar} style={{}}> 
//                 <input type='search' value={userInput} onChange={handleChange} 
//                     //onSubmit={() => clearInput()}
//                     />
//                 <button onClick={() => {onSearch(userInput); clearInput() }} className={styles.button}>
//                     Agregar</button> 
                    
//                 <button onClick={() => {onSearch(getRandomInt(826)); clearInput() }} className={styles.button}>
//                     Random</button>
//             </span>
          
//        </div>
       
//     )
//  }

// import styles from  "./NavBar.module.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Burger from "../Burger/Burger";



import logo from "../../img/logo.png";
import iProfile from "./icon-profile.png";
import iSettings from "./icon-settings.png";
import iWorld from "./icon-world.png";


//import React, { useState } from 'react';
import styles from "./NavBar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [userInput, setUserInput] = useState("");

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

 

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch ( getAllCountries() );
  // }, []);


  return (
    <>
      <button className={styles.burger} onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="40" height="30">
          <rect width="100" height="10"></rect>
          <rect y="25" width="100" height="10"></rect>
          <rect y="50" width="100" height="10"></rect>
        </svg>

        {/* <Burger/> */}
        
      </button>
      <div className={`${styles.navbar} ${isOpen ? 'open' : ''}`}>

        <div className={styles.logo}>
          <Link to={"/"} >
            <img src={logo} alt="Logo" />
          </Link>
          <Link to={"/countries"} >
            <span>PI Countries</span>
          </Link>
          
        </div>

        <SearchBar></SearchBar>
        {/* <div className={styles.search}>
          <span>&#x1F50D;</span>
          <input type="text" placeholder="Search" onChange={handleChange}/>
        </div> */}

        <nav className={styles.links}>
          <a href="/activityCreator" className={styles.logoRoutes}>
            Create Activity &#x23E9;
            <img src={iWorld} alt="Home" />
          </a>

          <a href="/profile" className={styles.logoRoutes}>
            {/* Profile&#x1F51C;  */}
            <img src={iProfile} alt="Profile" />
          </a>

          <a href="/settings" className={styles.logoRoutes}>
            {/* Settings&#x1F51C;  */}
            <img src={iSettings} alt="Settings" />
          </a>

        </nav>

      </div>
    </>
  );
}

export default Navbar;