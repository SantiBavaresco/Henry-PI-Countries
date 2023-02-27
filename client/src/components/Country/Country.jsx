import React from "react";
import styles from "./Country.module.css"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState } from "../../redux/actions";




function Countries(props) {

   const dispatch = useDispatch();

  
  return (
    <div className={styles.card1} >
       <div id={props.id} key={props.id} >

          <NavLink to={`/country/${props.id}`} onClick={ ()=> dispatch (clearState()) }>
            <img  src={props.flag} alt="No encontrado" /> 
          </NavLink>
          
          <h2 >{props.name}</h2>

          <h4>{props.continent}</h4>
          {/* <h4>{props.subregion}</h4> */}
          <h4> </h4>

          {/* {/* {location.pathname ==='/home' ? */}
          {/* <button >X</button>  */}
          {/* : null } */}
          {/* {
          isFav ? (
             <button className={styles.fav} onClick={handleFavorite}>❤️</button>
          ) : (
             <button className={styles.fav} onClick={handleFavorite}>🤍</button>
          )
       } */}
       </div>
    </div>
 );
      }
export default Countries;