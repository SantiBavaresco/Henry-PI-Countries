const { Country } = require("../db");
const { Op } = require("sequelize");
const { countryActivitiesByID } = require("../controllers/CountryActivitiesByID")

async function countryByString (name) {
/*  Function that returns a country whose name contains the string passed as a parameter.
    Args:   name ( string[3] ) 
    Returns: returns an array of the countries that match withe the name string in his name.
*/ 
    const array = [];
    const countryFound = await Country.findAll({ 
        where : {   
            name :  { [Op.iLike]: `%${name}%` }
        } ,
    });

    if(countryFound.length === 0) 
        throw new Error(`There is no country in the DB that matches with "${name}"`);

    for (let index = 0; index < countryFound.length; index++) {
        const aux = await countryActivitiesByID(countryFound[index].ID)
        array.push(aux)
    };
    return array;
};

module.exports = { countryByString };