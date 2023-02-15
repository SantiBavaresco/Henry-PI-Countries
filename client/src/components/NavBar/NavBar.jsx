//import SearchBar from './SearchBar.jsx';
import styles from '../stylesModules/NavBar.module.css';
//import Titulo from "../img/Rick-and-Morty.png";
import { Link } from 'react-router-dom';


// export default function NavSeachBar(props) {
//     const {onSearch} = props;
 
//     return (
//        <div className={styles.divBienvenido} >
//           {/* <img src={Titulo} style={{height: 100}}/> */}
//           <span style={{display:"flex", justifyContent: "right", alignItems: "center"}}>
 
//              <Link to={"/home"}>
//                 <img src={Titulo} className={styles.hvr_buzz} style={{height: 80, justifyContent: "center  ", alignItems: "center"}}/>
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
          
//              <SearchBar onSearch={onSearch} /> 
          
//        </div>
       
//     )
//  }