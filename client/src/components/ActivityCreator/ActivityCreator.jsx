import { useState } from "react";
import styles from "./ActivityCreator.module.css";

// { 
//     "name": "Football 9",
//     "difficulty": 1,
//     "duration": 2,
//     "season": "Summer",
//     "arrayCountries": ["arg", "uRY", "tuR"]
// }


const ActivityCreator = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");


  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [locationError, setLocationError] = useState("");

  

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate input fields
    if (!name) {
      setNameError("Title is required");
      return;
    }
    if (!description) {
      setDescriptionError("Description is required");
      return;
    }
    if (!date) {
      setDateError("Date is required");
      return;
    }
    if (!time) {
      setTimeError("Time is required");
      return;
    }
    if (!location) {
        setTimeError("Location is required");
        return;
      }

    // Submit the form if validation passes
    console.log("Form submitted with name:", name, "description:", description, "date:", date, "time:", time);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError("");
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setDescriptionError("");
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    setDateError("");
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    setTimeError("");
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    setLocationError("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Create New Activity</h2>
        <div className={styles.row}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className={styles.row}>
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <div className={styles.row}>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" value={location} onChange={handleLocationChange} />
        </div>
        <div className={styles.row}>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" value={date} onChange={handleDateChange} />
        </div>
        <div className={styles.row}>
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" value={time} onChange={handleTimeChange} />
        </div>
        <div className={styles.row}>
            <button type="submit">Create Activity</button>
        </div>
      </form>
      <div className={styles.minimap}>
        {/* Code to display and interact with the map */}
      </div>
    </div>
  );
};

export default ActivityCreator;



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

//   const validateForm = () => {
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
//     setValid(validateForm());
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
