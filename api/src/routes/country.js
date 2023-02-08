const { Router } = require('express');
const router = Router();
//const axios = require('axios');
// const {getAllCountries} = require('../controllers/getCountries');
const { Activity, Country } = require('../db')
const { createCountry, CountriesFromApi } = require("../controllers/createCountry")


router.post("/NewCountry", async (req, res)=>{
    const { ID, name, flag, capital, continent, subregion, area, population, timezone} = req.body;
   
    if (! [ID, name, flag, capital, continent, subregion, area, population, timezone].every(Boolean) ){
        return res.status(404).send("Falta enviar datos obligatorios");
    }

    try{ // es mala practica pasar el req.body directo
        // console.log(await Country.create({ID, name, flag, capital, continent, subregion, area, population, timezone
        // }))
        const newCountry = await createCountry( { ID, name, flag, capital, continent, subregion, area, population, timezone});
        res.status(201).json(newCountry);
    }
    catch(error){
        
        res.status(404).send(error.message);
    }
});

router.post("/BringCountriesFromApi", async (req, res)=>{

    try {
        
        CountriesFromApi();
        res.status(201).send("Operacion exitosa !!");
    } 
    
    catch (error) {
        res.status(404).json(error.message)
        
    }
        
});


router.get("/All", async (req , res)=>{
    console.log("ESTE ES EL ALL")
    const allCountries = await Country.findAll()
   
     if(!allCountries){
        res.status(400).send("No Countries")
     }
        
     else {
        res.status(200).send(allCountries)
    }
    
})

module.exports = router;