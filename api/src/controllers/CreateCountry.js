const { Country } = require("../db");
const axios = require('axios');

async function CountriesFromApi () {
    const apiDB = await axios.get('https://restcountries.com/v3.1/all')

    apiDB.data.map( (item) => 
        {
            createCountry( 
                {
                    ID: item.cca3,
                    name: item.name.common,
                    flag: item.flags.png,
                    capital: "asdasasd", 
                    continent: item.region, 
                    subregion: item.subregion, 
                    area: item.area, 
                    population: item.population, 
                    timezone: "asdasdas",
                }
            )
        })
    
}

async function createCountry ( {ID, name, flag, capital, continent, subregion, area, population, timezone} )
    {
        const newCountry = await Country.create(
            { ID, name, flag, capital, continent, subregion, area, population, timezone });
        return newCountry;
    };



module.exports = {createCountry, CountriesFromApi};