import styles from './About.module.css';
import { useParams, useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Santi from "../../img/ProfilePicture.png";
import Linker from './Linker';


export default function About(){
    const navigate = useNavigate();
    function handleReturn() {
        window.history.back()
    }
    return( 
    <div className={styles.about}>
        <span > 
            <h3 style={{width: "95%", margin: "auto", paddingTop: "10px", color: "black"}} >Santiago Bavaresco</h3>
            <Linker href="https://www.linkedin.com/in/santiago-bavaresco/">
                <div className={styles.shape_outer}
                style={{width: "13%", margin: "auto"}}
                >
                    <img className={styles.shape_inner} src={Santi}></img>
                </div>
            </Linker>
            <p style={{width: "95%", margin: "auto", paddingTop: "10px", color: "black"}}>
            Hi, I'm Santiago, passionate about the IT world and software development.
            I am very interested in technology, very patient, meticulous and manage to seek efficiency in the emerging
            problems that are presented to us in the world of programming. Currently I am taking Henry's course to
            be able to update myself in Full Stack Web Development.
            With a proactive, analytical, creative, professional with the capacity for planning, organization and team
            leadership; also with skills and criteria for decision making and problem solving labor problems, common
            sense, security and permanent dialogue to meet the objectives with different areas.

            </p>
            <p style={{width: "95%", margin: "auto", paddingTop: "10px", color: "black"}}>       
            With a proactive, analytical, creative, professional with the capacity for planning, organization and team
            leadership; also with skills and criteria for decision making and problem solving labor problems, common
            sense, security and permanent dialogue to meet the objectives with different areas.
        </p>
        </span>
        
        <div style={{display:"flex", justifyContent: "center"}}>
            <Link to={"/"}>
                <button style={{height:"40px", width:"160px", margin: "10px"}}>Back to Home</button>
            </Link>
            <a href="/countries">
                <button style={{height:"40px", width:"160px", margin: "10px"}}>Back to countries</button>
            </a>
            <button onClick={handleReturn} style={{height:"40px", margin: "10px"}}>Back</button>
        </div>
    </div>
    );
}