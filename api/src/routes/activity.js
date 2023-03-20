const { Router } = require('express');
const router = Router();
const { Activity, Country } = require('../db')
const { createActivity, createCountryActivity, createStandarActivities } = require("../controllers/createActivity")
const { randomCountriesArray } = require("../controllers/GenerateRandomArray")
const { addExistingActivitiesToCountries } = require("../controllers/AddExistingActivitiesToCountries")


router.post("/CreateActivity", async (req, res)=>{
/*  Route that creates the new activity, receives an array of countries that, if it is "Random", generates it randomly.
    Args: parameter for the creation by req.body.
    Returns: response of succed or failure.
*/ 
    // http://localhost:3001/api/activities/CreateActivity
    let { name, difficulty, duration, season, arrayCountries} = req.body;
    
    if(arrayCountries[0]==="Random") {
        arrayCountries = await randomCountriesArray();
    }
    if(! [name, difficulty, duration].every(Boolean) ){
        return res.status(404).send("Missing mandatory data");
    }

    try{ 
        const newActivity = await createCountryActivity({name, difficulty, duration, season, arrayCountries});
        res.status(201).send("Activity added successfully");
    }
    catch(error){
        res.status(404).send("Duplicated Key");
    }
});


router.post("/CreateStandarActivities", async (req, res)=>{
/*  Route that loads 20 basic activities to the DB.
    Returns: response of succed or failure.
*/ 
    // http://localhost:3001/api/activities/CreateActivity

    try {
        await createStandarActivities();
        res.status(201).send("Activities cargadas en DB");
    } 
    
    catch (error) {
        res.status(409).send(error.message)       
    }
});



router.get("/", async (req , res)=>{
/*  Route that shows all the Activities of the DB
    Returns: response of succed with a json of all activities or msg of failure.
*/ 
    // http://localhost:3001/api/activities/
    
    try {
        const allActivities = await Activity.findAll()
        if(allActivities.length === 0){
            res.status(400).send("No Activities Found")
        }
            
        else {
            res.status(200).send(allActivities)
        }
    } 
    catch (error) {
        res.status(404).send(error.message);
    }

})


router.get("/:idCountry", async (req , res)=>{ 
/*  Route that returns the activities that have the country requested by parameter.
    Returns: response of succed with a json of the country found or msg of failure.
*/ 
    // http://localhost:3001/api/activities/arg
    let { idCountry } = req.params; 
    try {
        const countryFound = await Country.findByPk(idCountry?.toUpperCase());

        if(!countryFound) throw Error(`The code ${idCountry} does not correspond to an existing country`);

        const tasks = await countryFound.getActivities();
        res.status(200).json(tasks.map(task => task.name));
    } 

    catch (error) {
        return res.status(404).send(error.message)
    }
    
});


router.post("/AddExistingActivitiesToCountries", async (req, res) =>{
/*  Route that add existing activities, based on the countries given by parameter.
    Args:   arrayActivities ( array(id) ) 
            arrayCountries ( array(string) )
    Returns: an array of the countries that the activity could be added to. or msg of failure.
*/ 
    let { arrayActivities, arrayCountries} = req.body;
    
    try {
        const countriesWithActivities = await addExistingActivitiesToCountries(arrayActivities, arrayCountries);
        res.status(201).json(countriesWithActivities)
    }
    catch (error) {
        return res.status(400).send(error.message)
    }

});


module.exports = router;