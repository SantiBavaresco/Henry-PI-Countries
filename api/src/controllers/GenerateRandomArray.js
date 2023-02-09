const {Activity, Country} = require("../db");

// funcion que extrae el ID de todos los paises de la BD y retorna un array con esos ID.
async function extractIdFromCountriesDB(){
    let aux = [];
    const allCountries = await Country.findAll();
    allCountries.forEach(element => {
        aux.push(element.ID)
    });
    return aux;
}

// funcion que genera un array de numeros aleatorios no repetidos.
function generateRandomNumber() {
    let Numbers = [];
   // let number = Math.floor(Math.random() * 250) + 1;
    for(let i=0; i<150; i++){
        let number = Math.floor(Math.random() * 249) + 1;
        if (!Numbers.includes(number)) {
          Numbers.push(number);
        } 
      }
    //  console.log(Numbers.length);
    return Numbers;
}

// funcion que genera un array de ID en funcion del array de numeros aleatorios, devolviendo un array de ID aleatorios no repetidos.
async function randomCountriesArray(){
    let generatedNumbers = generateRandomNumber();
    let countriesArrayId = await extractIdFromCountriesDB();
    let countriesArray = [];
   
    generatedNumbers.forEach(element => {
        countriesArray.push(countriesArrayId[element]);
    });

    return countriesArray;
}

    

module.exports = {randomCountriesArray};