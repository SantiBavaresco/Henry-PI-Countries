
export default function validation (inputs){
    let errors={};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    // --- Username ---
    if(!inputs.username) errors.username = "Por favor, complete este campo.";
    else if(inputs.username.length > 35) errors.username = "Nombre de usuario demaciado largo.";
    else if(!regexEmail.test(inputs.username)) errors.username = "El nombre de usuario deber ser un email valido.";
    // --- Password ---
    if(!inputs.password) errors.password = "Se requiere una password valida";
    else if(inputs.password.length > 10) errors.password = "La contraseña es demaciado larga.";
    else if(inputs.password.length < 6) errors.password = "La contraseña es demaciado corta.";
    else if(!regexPassword.test(inputs.password)) errors.password = "La contraseña debe tener almenos un numero.";
    
    return errors;
  }