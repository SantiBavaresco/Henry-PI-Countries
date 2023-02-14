const { Router } = require('express');
const router = Router();
// const {getAllCountries} = require('../controllers/getCountries');
const { Activity, Country } = require('../db')
const { createActivity, createCountryActivity, createStandarActivities } = require("../controllers/createActivity")
const { randomCountriesArray } = require("../controllers/GenerateRandomArray")
const { addExistingActivitiesToCountries } = require("../controllers/AddExistingActivitiesToCountries")


// Ruta que crea la actividad nueva, recibe un array de countries que si es "Random" lo genera aleatoriamente
router.post("/CreateActivity", async (req, res)=>{
    // http://localhost:3001/api/activities/CreateActivity
    let { name, difficulty, duration, season, arrayCountries} = req.body;
   
    if(arrayCountries[0]==="Random") {
        arrayCountries = await randomCountriesArray();
    }
    if(! [name, difficulty, duration].every(Boolean) ){
        return res.status(404).send("Falta enviar datos obligatorios");
    }

    try{ // es mala practica pasar el req.body directo
        const newActivity = await createCountryActivity({name, difficulty, duration, season, arrayCountries
        });
        // newActivity.addContry(variabled el pais)
        res.status(201).send("Actividad agregada exitosamente");
    }
    catch(error){
        res.status(404).send(error.message);
    }
});

// ruta que carga 20 actividades basicas a la DB
router.post("/CreateStandarActivities", async (req, res)=>{
    // http://localhost:3001/api/activities/CreateActivity

   try {
        await createStandarActivities();
        res.status(201).send("Activities cargadas en DB");
    } 
    
    catch (error) {
        res.status(409).send(error.message)       
    }
});


// Ruta que muestra todas las Activities de la DB
router.get("/", async (req , res)=>{
    // http://localhost:3001/api/activities/
    
    try {
        const allActivities = await Activity.findAll()
        if(allActivities.length === 0){
            res.status(400).send("No Activities")
        }
            
        else {
            res.status(200).send(allActivities)
        }
    } 
    catch (error) {
        res.status(404).send(error.message);
    }

})

// Ruta que devuelve las actividades que tiene el pais solicitado por parametro
// devuelve 200 = []; si el paies existe y no tiene actividades - SOLUCIONAR
router.get("/:idPais", async (req , res)=>{ 
    // http://localhost:3001/api/activities/arg
    const { idPais } = req.params; 
    try {
        const countryFound = await Country.findByPk(idPais.toUpperCase());

        if(!countryFound) throw Error(`El código ${idPais} no corresponde a un pais existente`);

        const tasks = await countryFound.getActivities();
        res.status(200).json(tasks.map(task => task.name));

    } 

    catch (error) {
        return res.status(404).send(error.message)
        //.send(`El código ${idPais} no corresponde a un pais existente`)
    }
    
});


router.post("/AddExistingActivitiesToCountries", async (req, res) =>{
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