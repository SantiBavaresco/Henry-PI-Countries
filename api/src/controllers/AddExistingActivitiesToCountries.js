const { Country, Activity } = require("../db");
const { countryActivitiesByID } = require("../controllers/CountryActivitiesByID")

async function findActivityByPk(id){
    return await Activity.findByPk(id)
}

async function findCountryByPk(id){
    return await Country.findByPk(id)
}

async function addExistingActivitiesToCountries ( arrayActivities, arrayCountries )
{
    let resultado = []
    let validator = 0;

    for (let e = 0; e < arrayActivities.length; e++) {
        let countryWithOutActivity = []
        const activityFound = await findActivityByPk(arrayActivities[e])

        if(!activityFound) throw new Error("Id de Actividad invalido/inexistente")

        for (let element = 0; element < arrayCountries.length; element++) {
            let flag = false;
            arrayCountries[element] = arrayCountries[element].toUpperCase()

            const modelCountryFound = await findCountryByPk(arrayCountries[element]);
            if(!modelCountryFound) throw new Error("Id de Pais invalido/inexistente")
            const countryFound = await countryActivitiesByID(arrayCountries[element]);

            flag = countryFound.Activities.includes(activityFound.name)
                
            if(!flag){
                modelCountryFound.addActivity(activityFound)
                validator++;
            }
            else 
                countryWithOutActivity.push(countryFound.ID)  
        }

        resultado.push( { 
            message: 'Ya tienen la actividad',
            idActivity: activityFound.dataValues.id,
            countries: countryWithOutActivity
        })
        
    }

    if(validator===0)
        throw new Error("Todos los paises pasados ya tienen esas actividades")
    return resultado;

};

module.exports = {addExistingActivitiesToCountries};