const { Activity } = require("../db");
const { randomCountriesArray } = require("../controllers/GenerateRandomArray")


// Funcion que crea en la DB una Activity
async function createActivity ( {name, difficulty, duration, season} )
{
    const newActivity = await Activity.create(
        {name, difficulty, duration, season});
    return newActivity;
};

// funcion que crea la actividad, y completa la tabla intermedia entre Country-Activity, dependiendo de la cantidad de paises que se le pasaron por arrayCountries.
async function createCountryActivity ({name, difficulty, duration, season, arrayCountries})
{
    if(arrayCountries[0]==="Random") {
        arrayCountries = await randomCountriesArray();
    }
    
    const newActivity = await Activity.create(
        {name, difficulty, duration, season});

    arrayCountries.forEach(async(element) => {
        element = element.toUpperCase()
        await newActivity.addCountry(element)
    });
    
    return newActivity;
};

// funcion que crea 20 actividades basicas en la DB con paises aleatorios
async function createStandarActivities (){
    const activities = [
        "Turismo de Sol y Playa","Parques Acuaticos","4x4 OffRoad","Centros Culturales Historicos","Senderismo","Ciclismo de Montaña",
        "Ski","Snowboard","Escalada deportiva","Escalada Clasica","Turismo Hipico","Turismo de Golf","Camping Indoor","Camping Outdoor",
        "Turismo Mitologico","Turismo de Aventura","Pesca en rios","Pescar Embarcado","Turismo de Glaciares","Parapente"
        ]
    const season = ["Summer","Summer","All year","All year","Spring","Spring","Winter","Winter","All year",
        "Autumn","Autumn","Spring","Summer","All year","Autumn","Winter","Spring","Summer","Autumn","Spring"
        ]    
    const difficulty = [ 1,2,4,1,2,4,5,5,4,5,1,2,1,3,1,3,2,3,1,4 ]
    const duration = [ 16,9,6,8,11,6,8,9,8,12,8,10,24,24,12,15,20,8,8,2 ]

    const aux = await Activity.findAll()
    if(aux.length!==0)  
        throw new Error("La base de datos ya fue cargada, imposible cargarla nuevamente (ID repetidos)"); 

    for (let index = 0; index < activities.length; index++) {

        await createCountryActivity({
            name: activities[index],
            difficulty: difficulty[index],
            duration: duration[index],
            season: season[index],
            arrayCountries: ["Random"],
    })
        
    }
}

module.exports = {createActivity, createCountryActivity, createStandarActivities};