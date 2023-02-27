import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Loading.module.css";
import planet from "../../img/planet.gif";
import satellite from "../../img/satellite.gif";

function Loading() {

function handleReturn() {
    window.history.back()
}

return(
    <div className={styles.load}>
        
        <div className={styles.about}>
            <div>
            <img src={satellite} className={styles.imagen1} alt="e404"/>
            </div>
            <div>
            <img src={planet} className={styles.imagen2} alt="e404"/>
            </div>
            {/* <img src={forth} className={styles.imagenes} alt="e404"/> */}
        </div>
        <span>
            <h1 className={styles.text}>Loading</h1>
        </span>
        <hr />
        <div style={{display:"flex", justifyContent: "space-evenly"}}>
        <button onClick={handleReturn} style={{height:"40px"}}>Back</button>
      </div>
        
    </div>
)
}

export default Loading;