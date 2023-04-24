const { Router } = require('express');
const router = Router();
const { Activity, Country } = require('../db');
const { createCountry, countriesFromApi } = require("../controllers/CreateCountry")
const { countryActivitiesByID } = require("../controllers/CountryActivitiesByID")
const { countryByString } = require("../controllers/CountryByString")
const { randomCountriesArray } = require("../controllers/GenerateRandomArray")


router.post("/NewCountry", async (req, res)=>{
/*  Route to create a new Country in the DB. (it's not necessary but it's just in case).
    Args:   parameter for the creation by req.body.
    Returns: response of succed with json of the new country or msg of failure.
*/ 
    // http://localhost:3001/api/countries/NewCountry
    let { ID, name, flag, capital, continent, subregion, area, population, timezone, maps} = req.body;
    ID = ID.toUpperCase();

    if (! [ID, name, flag, capital, continent, timezone, maps].every(Boolean) ){
        return res.status(404).send("Missing mandatory data");
    }
    
    try{ 
        const newCountry = await createCountry( 
            { ID, name, flag, capital, continent, subregion, area, population, timezone, maps});
        res.status(201).json(newCountry);
    }
    catch(error){  
        res.status(400).send(error.message);
    }
});


router.post("/BringCountriesFromApi", async (req, res)=>{
/*  Route to load all the countries in the DB from the API.
    Returns: response of succed or failure.
*/ 
    // http://localhost:3001/api/countries/BringCountriesFromApi
    try {
        await countriesFromApi();
        res.status(201).send("API loaded in DB");
    } 
    
    catch (error) {
        res.status(408).send(error.message)       
    }
        
});


router.get("/", async (req , res)=>{
/*  Route that brings all the Countries of the DB.
    Returns: response of succed with json of all the countries or msg of failure.
*/ 
    // http://localhost:3001/api/countries/
    const allCountries = await countryByString("")

    try {
        if(allCountries.length ===0){
            res.status(404).send("No Countries Found")
        }
        else {
            res.status(200).json(allCountries)
        }
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
})


router.get("/id/:idCountry", async (req , res)=>{
/*  Route that returns a country with the id equal to the parameter.
    Returns: returns an array of the countries that match withe the id or msg of failure.
*/ 
    // http://localhost:3001/api/countries/id/arg
    let { idCountry } = req.params;
    idCountry = idCountry.toUpperCase();
    try {
        const countryFound = await countryActivitiesByID(idCountry);
        return res.status(200).json(countryFound);
    } 
    catch (error) {
        return res.status(404)
        .send(error.message)
    }
});


router.get("/s", async (req , res)=>{ 
/*  Function that returns a country whose name contains the string passed as a parameter.
    Returns: returns an json array of the countries that match withe the name string in his name or msg of failure.
*/ 
    // http://localhost:3001/api/countries/?name=arg
    const {name} = req.query;

    try {    
        const countryFound = await countryByString(name);
        res.status(200).json(countryFound);
    } 

    catch (error) {
        res.status(404).send(error.message)
    }
    
});


module.exports = router;