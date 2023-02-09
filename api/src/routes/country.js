const { Router } = require('express');
const router = Router();
//const axios = require('axios');
const { Activity, Country } = require('../db');
const { createCountry, CountriesFromApi } = require("../controllers/createCountry")
const { randomCountriesArray } = require("../controllers/GenerateRandomArray")
const { Op } = require("sequelize");


// Ruta para crear un Country nuevo en la DB. (no es necesaria pero esta por las dudas)
router.post("/NewCountry", async (req, res)=>{
    let { ID, name, flag, capital, continent, subregion, area, population, timezone, maps} = req.body;
    ID = ID.toUpperCase();

    if (! [ID, name, flag, capital, continent, timezone, maps].every(Boolean) ){
        return res.status(404).send("Falta enviar datos obligatorios");
    }
    
    try{ // es mala practica pasar el req.body directo
        const newCountry = await createCountry( { ID, name, flag, capital, continent, subregion, area, population, timezone, maps});
        res.status(201).json(newCountry);
    }
    catch(error){  
        res.status(400).send(error.message);
    }
});

// Ruta para cargar todos los paises en la DB desde la API 
router.post("/BringCountriesFromApi", async (req, res)=>{
    try {
        await CountriesFromApi();
        res.status(201).send("API cargada en DB");
    } 
    
    catch (error) {
        res.status(408).send(error.message)       
    }
        
});


// Ruta que trae todos los Countries de la DB
router.get("/", async (req , res)=>{

    const allCountries = await Country.findAll()
    try {
        if(allCountries.length ===0){
            res.status(404).send("No Countries")
        }
        else {
            res.status(200).json(allCountries)
        }
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
       
})


// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes

// ruta que trae el Country con el ID pasado desde la DB
// EJ: http://localhost:3001/api/countries/arg
router.get("/id/:idPais", async (req , res)=>{ 
    let { idPais } = req.params;
    idPais = idPais.toUpperCase()
    try {
        let countryFound = await Country.findOne({
            where: { ID: idPais,},
            include: { 
                model: Activity,
                attributes: ["name"],
                through: { attributes: [] },
            },
        });

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
router.get("/name", async (req , res)=>{ 
    // /countries/:atributre?value=20 
    const {name} = req.query;

    try {    
        const aux = await Country.findAll({ 
            where : {
                name :  { [Op.iLike]: `%${name}%` }
            } 
        });
        res.status(200).json(aux);
    } 
    catch (error) {
        res.status(404).send(error.message)
    }
    
});


module.exports = router;