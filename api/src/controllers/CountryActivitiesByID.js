const { Country, Activity } = require("../db");

async function countryActivitiesByID (idCountry) {
/*  Function that returns list of countries + activities in a clean way, based on the id given by parameter.
    Args: idCountry ( string[3] ) 
    Returns: objetc country + activities that match with the id.
*/  
    let countryFound = await Country.findOne({
        where: { ID: idCountry,},
        include: { 
            model: Activity,
            attributes: ["name"],
            through: { attributes: [] },
        },
    });

    // ---- pasa de array de objetos a un array ----
    let ac = countryFound.Activities.map(function(obj) {
        return obj.dataValues.name;
    });
    countryFound.dataValues.Activities=(ac);
    // ---------------------------------------------

    return countryFound.dataValues;
};

module.exports = { countryActivitiesByID };