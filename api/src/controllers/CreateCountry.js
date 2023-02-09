const { Country } = require("../db");
const axios = require('axios');

function arrayToString(a){
    let aux = "";
    a ? aux = a[0] : aux = "-";
    return aux;
}

async function createCountry ( {ID, name, flag, capital, continent, subregion, area, population, timezone, maps} )
{
    const newCountry = await Country.create(
        { ID, name, flag, capital, continent, subregion, area, population, timezone, maps });
    return newCountry;
};

async function CountriesFromApi () {
    const apiDB = await axios.get('https://restcountries.com/v3.1/all')

    apiDB.data.map( async (item) => 
        { 
            // const aux = await Country.findByPk(item.cca3.toUpperCase())
            // //console.log(aux);
            // if(aux) return (`EL pais con el ID: ${item.cca3} ya existe en la base de datos`);

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