import styles from './Error404.module.css';
import forth from "../../img/4.png";
import zero from "../../img/0.png";
import { Link, Outlet } from "react-router-dom";


import { useNavigate } from "react-router-dom";

export default function Error404(props){
    const navigate = useNavigate();
    let errorMessage = "Page not found"
    const {error}= props;
    if(error) errorMessage=error;

    function handleReturn() {
        window.history.back()
    }

    return( 
    <div className={styles.error}>
        {/* <span >  */}
            <h1></h1>
            <div >
                <div className={styles.context}>
                <img src={forth} className={styles.image} alt="e404"/>
                <img src={zero} className={styles.image1} alt="e404"/>
                <img src={forth} className={styles.image} alt="e404"/>
            </div>
            <span>
                <h1 className={styles.text}>{errorMessage}</h1>
            </span>
            <hr />
            </div>
        
        {/* </span> */}

        {/* <div>
            <button onClick={()=>navigate("/home")} className={styles.button}
            style={{marginTop: "2%", marginBottom: "2%"}}>Volver</button>
        </div> */}
        <div style={{display:"flex", justifyContent: "center"}}>
            <Link to={"/"}>
                <button style={{height:"40px", width:"160px", margin: "10px"}}>Back to Home</button>
            </Link>
            <Link to={"/countries"}>
                <button style={{height:"40px", width:"160px", margin: "10px"}}>Back to countries</button>
            </Link>
            <button onClick={handleReturn} style={{height:"40px", margin: "10px"}}>Back</button>
        </div>
    </div>
    );
}