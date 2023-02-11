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
    const newCountry = await Country.create(
        { ID, name, flag, capital, continent, subregion, area, population, timezone, maps });
    return newCountry;
};

// funcion que trae los datos de los paises de la API y los crea en la DB
async function countriesFromApi () {
    const aux = await Country.findAll()
    if(aux.length!==0)  
        throw new Error("La base de datos ya fue cargada, imposible cargarla nuevamente (ID repetidos)");                

    const apiDB = await axios.get('https://restcountries.com/v3.1/all')
    try {
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
    } catch (error) {
        res.status(408).send(error.message)
    }
}

module.exports = {createCountry, countriesFromApi};