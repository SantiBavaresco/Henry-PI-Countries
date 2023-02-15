import styles from '../stylesModules/SeatchBar.module.css';
import { useState } from 'react';

// export default function SearchBar(props) {
//    const {onSearch} = props;
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
   
//    return (
//       <span className={styles.searchBar} style={{}}> 
//          <input type='search' value={userInput} onChange={handleChange} 
//             //onSubmit={() => clearInput()}
//             />
//          <button onClick={() => {onSearch(userInput); clearInput() }} className={styles.button}>
//             Agregar</button> 
            
//          <button onClick={() => {onSearch(getRandomInt(826)); clearInput() }} className={styles.button}>
//             Random</button>
//       </span>
//    );
// }