const { Router } = require('express');
const router = Router();
//const axios = require('axios');
const { Activity, Country } = require('../db')
const { createCountry, CountriesFromApi } = require("../controllers/createCountry")


router.post("/NewCountry", async (req, res)=>{
    const { ID, name, flag, capital, continent, subregion, area, population, timezone, maps} = req.body;
   
    if (! [ID, name, flag, capital, continent, subregion, area, population, timezone, maps].every(Boolean) ){
        return res.status(404).send("Falta enviar datos obligatorios");
    }

    try{ // es mala practica pasar el req.body directo
        const newCountry = await createCountry( { ID, name, flag, capital, continent, subregion, area, population, timezone, maps});
        res.status(201).json(newCountry);
    }
    catch(error){
        
        res.status(404).send(error.message);
    }
});

router.post("/BringCountriesFromApi", async (req, res)=>{
    try {
        await CountriesFromApi();
        res.status(201).send("Operacion exitosa !!");
    } 
    
    catch (error) {
        res.status(404).json(error.message)       
    }
        
});


router.get("/", async (req , res)=>{
    
    const allCountries = await Country.findAll()
    try {
        if(allCountries.length ===0){
            
            res.status(400).send("No Countries")
        }
        else {
            res.status(200).json(allCountries)
        }
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
})

// router.get("/", async (req , res)=>{ 


// });

// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes

router.get("/:idPais", async (req , res)=>{ 
    const { idPais } = req.params;
    idPais.toUpperCase()
    console.log(idPais.toUpperCase());
    try {
        const countryFound = await Country.findByPk(idPais.toUpperCase());

        if(!countryFound) throw Error;
            return res.status(200).json(countryFound);
    } 
    catch (error) {
        return res.status(404)
        .send(`El código ${idPais} no corresponde a un pais existente`)
    }
    
});

// [ ] GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado

router.get("/:attribute", async (req , res)=>{ 
    // /countries/:atributre?value=20
    const {attribute}= req.params; 
    const {value} = req.query;
    try {
        const aux = await Activity.findAll(
            { [attribute] : value },
    
            // { where: { [attribute]: null,
            //         },
        );
        res.status(200).json(aux);
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
    

});

module.exports = router;