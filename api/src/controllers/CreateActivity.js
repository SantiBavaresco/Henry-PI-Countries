const { Activity } = require("../db");

// Funcion que crea en la DB una Activity
async function createActivity ( {ID, name, difficulty, duration, season} )
{
    const newActivity = await Activity.create(
        {ID, name, difficulty, duration, season});
    return newActivity;
};

// funcion que crea la actividad, y completa la tabla intermedia entre Country-Activity, dependiendo de la cantidad de paises que se le pasaron por arrayCountries.
async function createCountryActivity ({ID, name, difficulty, duration, season, arrayCountries})
{
    const newActivity = await Activity.create(
        {ID, name, difficulty, duration, season});

    arrayCountries.forEach(element => {

        newActivity.addCountry(element.toUpperCase())
    });
    
    return newActivity;
};

module.exports = {createActivity, createCountryActivity};