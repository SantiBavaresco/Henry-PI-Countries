const { Country } = require("../db");
const axios = require('axios');


function arrayToString(a){
/*  Function that transforms an undefined into a string "-".
    Returns: "-".  
*/ 
    let aux = "";
    a ? aux = a[0] : aux = "-";
    return aux;
}


async function createCountry ( {ID, name, flag, capital, continent, subregion, area, population, timezone, maps} ){
/*  Function that creates a country in the DB.
    Args:   ID ( string[3] ) 
            name ( string )
            flag ( string )
            capital ( string )
            continent ( string )
            subregion ( string )
            area ( int )
            population ( int )
            timezone ( string )
            maps ( string )
    Returns: returns an object of the new country created.
*/ 
    const newCountry = await Country.create(
        { ID, name, flag, capital, continent, subregion, area, population, timezone, maps });
    return newCountry;
};


async function countriesFromApi () {
/*  Function that brings the data of the countries from the API and creates them in the DB
    Returns: returns error if the countries already exist, or if success.
*/ 
    const aux = await Country.findAll()
    if(aux.length!==0)  
        throw new Error("The database was already loaded, impossible to load it again (repeated IDs)");                

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