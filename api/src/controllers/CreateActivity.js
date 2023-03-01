const { Activity } = require("../db");
const { randomCountriesArray } = require("../controllers/GenerateRandomArray")


async function createActivity ( {name, difficulty, duration, season} ){
/*  Function that creates in the DB one activity.
    Args:   name ( string ) 
            difficulty ( int )
            duration ( int )
            season ( string )
    Returns: returns an object of the new activity created.
*/ 
    const newActivity = await Activity.create(
        {name, difficulty, duration, season});
    return newActivity;
};


async function createCountryActivity ({name, difficulty, duration, season, arrayCountries}){
/*  Function that creates the activity, and fills the intermediate table between Country-Activity,
        depending on the number of countries passed to it by arrayCountries.
    Args:   name ( string ) 
            difficulty ( int )
            duration ( int )
            season ( string )
            arrayCountries ( array(string[3]) )
    Returns: returns an object of the new activity created.
*/ 
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


async function createStandarActivities (){
/*  Function that creates 20 basic activities in the DB with random countries.
    Returns: returns error message if the activities already exist.
*/ 
    const activities = [
        "Sun and Beach Tourism","Water Parks","4x4 OffRoad","Historical Cultural Centers","Hiking","Mountain Biking",
        "Ski","Snowboard","Sport Climbing","Classic Climbing","Equestrian Tourism","Golf Tourism","Camping Indoor","Camping Outdoor",
        "Mythological Tourism","Adventure Tourism","Fishing in rivers","Fishing from Boat","Glacier Tourism","Paragliding"
        ]
    const season = ["Summer","Summer","All year","All year","Spring","Spring","Winter","Winter","All year",
        "Autumn","Autumn","Spring","Summer","All year","Autumn","Winter","Spring","Summer","Autumn","Spring"
        ]    
    const difficulty = [ 1,2,4,1,2,4,5,5,4,5,1,2,1,3,1,3,2,3,1,4 ]
    const duration = [ 16,9,6,8,11,6,8,9,8,12,8,10,24,24,12,15,20,8,8,2 ]

    const aux = await Activity.findAll()
    if(aux.length!==0)  
        throw new Error("The DataBase was already loaded, impossible to load it again (repeated IDs)"); 

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