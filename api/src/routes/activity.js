const { Router } = require('express');
const router = Router();
// const {getAllCountries} = require('../controllers/getCountries');
const { Activity, Country } = require('../db')

router.post("/CreateActivity", async (req, res)=>{
    const { ID, name, difficulty, duration, season} = req.body;
   
    if (! [ID, name, difficulty, duration, season].every(Boolean) ){
        return res.status(404).send("Falta enviar datos obligatorios");
    }

    try{ // es mala practica pasar el req.body directo
        const newActivity = await Activity.create({ID, name, difficulty, duration, season
        });

        res.status(201).json(newActivity);
    }
    catch(error){
        res.status(404).send("Error en alguno de los datos provistos");
    }
});


router.get("/", async (req , res)=>{
   //console.log("ESTE ES EL ALL Activity")
    const allActivities = await Activity.findAll()
    try {
        if(allActivities.length ===0){
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



module.exports = router;