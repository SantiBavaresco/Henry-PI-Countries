const { Country, Activity } = require("../db");
const { countryActivitiesByID } = require("../controllers/CountryActivitiesByID")

async function findActivityByPk(id){
/*  Function that returns the activity, based on the id given by parameter.
    Args: id ( int ) 
    Returns: objetc activity that match with the id.
*/  
    return await Activity.findByPk(id)
}

async function findCountryByPk(id){
/*  Function that returns the country, based on the id given by parameter.
    Args: id ( string[3] ) 
    Returns: objetc country that match with the id.
*/  
    return await Country.findByPk(id)
}

async function addExistingActivitiesToCountries ( arrayActivities, arrayCountries ){
/*  Function that add existing activities, based on the countries given by parameter.
    Args:   arrayActivities ( array(id) ) 
            arrayCountries ( array(string) )
    Returns: returns an array of the countries that the activity could be added to.
*/ 
    let result = []
    let val = 0;

    for (let e = 0; e < arrayActivities.length; e++) {
        let countryWithOutActivity = []
        const activityFound = await findActivityByPk(arrayActivities[e])

        if(!activityFound) throw new Error("Invalid/non-existent Activity Id")

        for (let element = 0; element < arrayCountries.length; element++) {
            let flag = false;
            arrayCountries[element] = arrayCountries[element].toUpperCase()

            const modelCountryFound = await findCountryByPk(arrayCountries[element]);
            if(!modelCountryFound) throw new Error("Invalid/non-existent Country Id")
            const countryFound = await countryActivitiesByID(arrayCountries[element]);

            flag = countryFound.Activities.includes(activityFound.name)
                
            if(!flag){
                modelCountryFound.addActivity(activityFound)
                val++;
            }
            else 
                countryWithOutActivity.push(countryFound.ID)  
        }

        result.push( { 
            message: 'They already have the activity',
            idActivity: activityFound.dataValues.id,
            countries: countryWithOutActivity
        })
        
    }

    if(val === 0)
        throw new Error("All past countries already have these activities")
    return result;

};

module.exports = {addExistingActivitiesToCountries};