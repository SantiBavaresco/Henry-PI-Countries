const { Country } = require("../db");
const { Op } = require("sequelize");
const { countryActivitiesByID } = require("../controllers/CountryActivitiesByID")


// funcion que devuelve un pais el cual el nombre del mismo contenga el strign pasado como parametro.
async function countryByString (name) {
    const array = [];
    const countryFound = await Country.findAll({ 
        where : {   
            name :  { [Op.iLike]: `%${name}%` }
        } ,
    });

    if(countryFound.length===0) 
        throw new Error(`No hay ningun pais en la DB que coincida con "${name}"`);
 
    for (let index = 0; index < countryFound.length; index++) {
        const aux = await countryActivitiesByID(countryFound[index].ID)
        array.push(aux)
    };
    return array;
    //return countryFound;
};

module.exports = { countryByString };