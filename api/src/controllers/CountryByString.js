const { Country } = require("../db");
const { Op } = require("sequelize");

// funcion que devuelve un pais el cual el nombre del mismo contenga el strign pasado como parametro.
async function countryByString (name) {

    const countryFound = await Country.findAll({ 
        where : {   
            name :  { [Op.iLike]: `%${name}%` }
        } ,
    });

    if(countryFound.length===0) 
        throw new Error(`No hay ningun pais en la DB que coincida con "${name}"`);

    return countryFound;
};

module.exports = { countryByString };