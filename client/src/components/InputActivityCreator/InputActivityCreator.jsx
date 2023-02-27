import { useState, useEffect } from "react";
import styles from "./InputActivityCreator.module.css";
// import { FaCheck } from 'react-icons';

import { getAllCountries, getActivities} from "../../redux/actions";


// { 
//     "name": "Football 9",
//     "difficulty": 1,
//     "duration": 2,
//     "season": "Summer",
//     "arrayCountries": ["arg", "uRY", "tuR"]
// }


const InputActivityCreator = (props) => {
  const [name, setName] = useState(null);
  const [difficulty, setDifficulty] = useState(1);
  const [duration, setDuration] = useState(1);
  const [season, setSeason] = useState(null);

  const [nameError, setNameError] = useState(null);
  const [difficultyError, setDifficultyError] = useState(null);
  const [durationError, setDurationError] = useState(null);
  const [seasonError, setSeasonError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const isButtonDisabled = !nameError || !difficultyError || !durationError || !seasonError || submitted;
  const areInputsDisabled = submitted;

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError("Error");
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
    setDifficultyError("Error");
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    setDurationError("Error");
  };

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
    setSeasonError("Error");
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormSuccess(true);
  };

  function Response(){
    let aux = [];
    aux.push(name,difficulty,duration,season)
    props.updateArrayItem(aux)
  }
  
//   [ 
//     0 --->    "name": "Football 9",
//     1 --->    "difficulty": 1,
//     2 --->    "duration": 2,
//     3--->    "season": "Summer",
//   ]
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* <h2>Create New Activity</h2> */}
        <div>
        <div className={styles.row}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} disabled={areInputsDisabled}/>
        </div>
        <div className={styles.row}>
            <label htmlFor="difficulty">Difficulty (1-5): {difficulty} </label>
            <input type="range" id="difficulty" value={difficulty} min="1" max="5" onChange={handleDifficultyChange} disabled={areInputsDisabled}/>
        </div>
        <div className={styles.row}>
            <label htmlFor="duration">Duration (1-24 hs): {duration}</label>
            <input type="range" id="duration" value={duration} min="1" max="24" onChange={handleDurationChange} disabled={areInputsDisabled}/>
        </div>
        {/* <div className={styles.row}>
            <label htmlFor="season">Season:</label>
            <input type="text" id="season" value={season} onChange={handleSeasonChange} />
        </div> */}

        <div className={styles.row} onChange={handleSeasonChange} >
            <label htmlFor="season" style={{width: "70px"}}>Season:</label>

            <input type="radio" id="All year" name="season" value="All year" disabled={areInputsDisabled}/>
            <label for="All year" style={{width: "70px"}} >All year</label>

            <input type="radio" id="Summer" name="season" value="Summer" disabled={areInputsDisabled}/>
            <label for="Summer" style={{width: "70px"}}>Summer</label>
            
            <input type="radio" id="Autumn" name="season" value="Autumn" disabled={areInputsDisabled}/>
            <label for="Autumn" style={{width: "70px"}}>Autumn</label>
            
        </div>
        <div className={styles.row} onChange={handleSeasonChange} >
            <input type="radio" id="Winter" name="season" value="Winter" disabled={areInputsDisabled}/>
            <label for="Winter" style={{width: "70px"}}>Winter</label>

            <input type="radio" id="Spring" name="season" value="Spring" disabled={areInputsDisabled}/>
            <label for="Spring" style={{width: "50px"}}>Spring</label>

        </div>
        </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "nowrap" }}>
            <button disabled={isButtonDisabled} type="submit"  onClick={Response}>
              {formSuccess ? <span>&#x2705; </span>: null}
              Submit</button>
          </div>
      </form>
    </div>
  );
};

export default InputActivityCreator;



//+++++++++++++++++++++++++++++++++++++Este es el de rick y morty +++++++++++++++++++++++++++++++++++++++

// import React from 'react'
// import styles from './ActivityCreator.module.css';
// //import styles from '/src/components/FormForm.module.css'; 
// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import validation from "./validation.js";


// export default function ActivityCreator(props){
//   const navigate = useNavigate();
  
//   const [userData, setUserData] = useState({
//      username: "",
//      password: "" 
//   });
//   const [errors, setErrors] = useState({
//     username: "",
//     password: ""
//   });
// //----Toogle visible password--------------------------------------------------------------------------------------------
// const [passwordType, setPasswordType] = useState("password");
// const [passwordInput, setPasswordInput] = useState("");

//     const handlePasswordChange =(evnt)=>{
//         setPasswordInput(evnt.target.value);
//     }
//     const togglePassword =()=>{
//       if(passwordType==="password")
//       {
//        setPasswordType("text")
//        return;
//       }
//       setPasswordType("password")
//     }
// //------------------------------------------------------------------------------------------------
//   function handleChange(evento){
//     setErrors(
//       validation({      
//         ...userData,
//         [evento.target.name]:evento.target.value,
//       })
//     );
//     // de esta manera puedo agregar propiedades al objeto sin pisar las anteriores, asi no
//     // tenemos que crear un handlechange por casa input, lo mismo con los errores.
//     setUserData({
//       ...userData,
//       [evento.target.name]:evento.target.value,
//     });
//   }

//   function handleSubmit(evento){
//     evento.preventDefault();
//     if(Object.keys(errors).length > 0)// paso las keys a un arreglo, si hay valores es que tengo algun error
//     {
//       alert("Debes corregir los errores");
//     }
//     else{
//       //alert("Datos completos");
//       // console.log(props.Login(userData));
//       props.Login(userData); 
//       setUserData({
//         username: "",
//         password: ""
//       });
//       setErrors({
//         username: "",
//         password: ""
//       });
//      // evita la recarga de la pagina y asi no se pierden datos.
//     }
//   }
    
//   const onSubmit = (data, e) => {
//     console.log(data)
    
//     // limpiar campos
//     e.target.reset();
// }

//     return( 
//     <div className={styles.about} style={{width: "80%", margin:"auto"}}>
//         <form onSubmit={handleSubmit}>
//         <span > 
//           <div >
//             <label htmlFor="username" className={styles.title}>Username: </label> 
//             <input 
//                 key="username"
//                 name="username"
//                 type="text" 
//                 placeholder="Escriba su usuario..."
//                 value={userData.username}
//                 onChange={handleChange}
//                 className={errors.username && "warning"} />
//             <p className={styles.danger}> {errors.username && errors.username}</p>
//           </div>

//           <div >
//             <label htmlFor="password" className={styles.title}>Password: </label> 
//             <input 
//                   key="password"
//                   name="password"
//                   type="password" 
//                   class="form-control"
//                   placeholder="Escriba su contraseña..."
//                   value={userData.password}
//                   onChange={handleChange}
//                   className={errors.password && "warning"} />
//                   <span className="input-group-btn">
//                   { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
//                   {/* <button type="button" className="btn btn-outline-primary" onClick={togglePassword}>
//                      { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
//                      </button> */}
//                   </span>
//             <p className={styles.danger}> {errors.password && errors.password}</p>
//           </div>

//             <button type="submit" className={styles.button}>Enviar</button>    

//             <p className={styles.p}> admin@admin.com - admin1234</p>   

//         </span>
//         </form>
//     </div>
//     );
// }

// ------------------------------------------------------------------------------------------------------------


// import React, { useState } from "react";
// import styles from "./ActivityCreator.module.css";

// const ActivityCreator = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [valid, setValid] = useState(false);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form submitted");
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   const validurationForm = () => {
//     if (name === "") {
//       return false;
//     }
//     if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       return false;
//     }
//     if (password.length < 8) {
//       return false;
//     }
//     return true;
//   };

//   const handleFormChange = () => {
//     setValid(validurationForm());
//   };

//   return (
//     <div className={styles.container}>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//             onBlur={handleFormChange}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             onBlur={handleFormChange}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             onBlur={handleFormChange}
//           />
//         </div>
//         <button type="submit" disabled={!valid}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ActivityCreator;
