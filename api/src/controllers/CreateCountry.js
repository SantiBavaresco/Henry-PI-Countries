const { Country } = require("../db");
const axios = require('axios');

// funcion que transforma un undefined en un string "-"
function arrayToString(a){
    let aux = "";
    a ? aux = a[0] : aux = "-";
    return aux;
}

// funcion que crea un pais en la DB
async function createCountry ( {ID, name, flag, capital, continent, subregion, area, population, timezone, maps} )
{
    const aux = await Country.findByPk(ID);

    if(aux) {
        throw new Error (`El pais con el Id: ( ${ID} ) ya existe en la base de datos`);
    }

    const newCountry = await Country.create(
        { ID, name, flag, capital, continent, subregion, area, population, timezone, maps });
    return newCountry;
};

// funcion que trae los datos de los paises de la API y los crea en la DB
async function CountriesFromApi () {
    const apiDB = await axios.get('https://restcountries.com/v3.1/all')

    apiDB.data.map( async (item) => 
        { 
            createCountry( 
                {   
                    ID: item.cca3,
                    name: item.name.common,
                    flag: item.flags.png,
                    capital: arrayToString(item.capital),
                    continent: item.region, 
                    subregion: item.subregion, 
                    area: item.area, 
                    population: item.population, 
                    timezone: arrayToString(item.timezones),
                    maps: item.maps.openStreetMaps,
                }
            )                   
        })
    
}

module.exports = {createCountry, CountriesFromApi};