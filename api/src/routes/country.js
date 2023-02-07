const { Router } = require('express');
const router = Router();
// const {getAllCountries} = require('../controllers/getCountries');
const { Activity, Country } = require('../db')


router.post("/CreateCountry", async (req, res)=>{
    const { ID, name, flag, capital, continent, subregion, area, population} = req.body;
   
    if (! [ID, name, flag, capital, continent, subregion, area, population].every(Boolean) ){
        return res.status(404).send("Falta enviar datos obligatorios");
    }

    try{ // es mala practica pasar el req.body directo
        const newCountry = await Country.create({ID, name, flag,    capital, continent, subregion, area, population
        });
        res.status(201).json(newCountry);
    }
    catch(error){
        res.status(404).send("Error en alguno de los datos provistos");
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