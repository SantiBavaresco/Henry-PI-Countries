const { Country } = require("../db");


async function extractIdFromCountriesDB(){
/*  Function that extracts the ID of all the countries of the database and returns an array with those IDs.
    Returns: returns array of countries id.
*/ 
    let aux = [];
    const allCountries = await Country.findAll();
    allCountries.forEach(element => {
        aux.push(element.ID)
    });
    return aux;
}


function generateRandomNumber() {
/*  Function that generates an array of non-repeating random numbers.
    Returns: returns array of random numbers.
*/ 
    let Numbers = [];
   // let number = Math.floor(Math.random() * 250) + 1;
    for(let i=0; i<150; i++){
        let number = Math.floor(Math.random() * 249) + 1;
        if (!Numbers.includes(number)) {
            Numbers.push(number);
        } 
    }
    return Numbers;
}


async function randomCountriesArray(){
/*  Function that generates an array of IDs based on the array of random numbers, returning an array of non-repeating random IDs.
    Returns: returns array of countries.
*/ 
    let generatedNumbers = generateRandomNumber();
    let countriesArrayId = await extractIdFromCountriesDB();
    let countriesArray = [];

    generatedNumbers.forEach(element => {
        countriesArray.push(countriesArrayId[element]);
    });

    return countriesArray;
}

module.exports = {randomCountriesArray};