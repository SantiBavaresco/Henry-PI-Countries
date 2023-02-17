import styles from './Error404.module.css';
import forth from "../../img/4.png";
import zero from "../../img/0.png";

import { useNavigate } from "react-router-dom";

export default function Error404(){
    const navigate = useNavigate();
    
    return( 
    <div >
        {/* <span >  */}
            <h1></h1>
            <div >
                <div className={styles.about}>
                <img src={forth} className={styles.imagenes} alt="e404"/>
                <img src={zero} className={styles.imagenes1} alt="e404"/>
                <img src={forth} className={styles.imagenes} alt="e404"/>
            </div>
            <span>
                <h1 className={styles.text}>Page not found</h1>
            </span>
            <hr />
            </div>
           
        {/* </span> */}

        {/* <div>
            <button onClick={()=>navigate("/home")} className={styles.button}
            style={{marginTop: "2%", marginBottom: "2%"}}>Volver</button>
        </div> */}
    </div>
    );
}