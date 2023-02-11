const { Country, Activity } = require("../db");

async function countryActivitiesByID (idPais) {
    idPais = idPais.toUpperCase();

    let countryFound = await Country.findOne({
        where: { ID: idPais,},
        include: { 
            model: Activity,
            attributes: ["name"],
            through: { attributes: [] },
        },
    });

    if(!countryFound) throw Error;

    // ---- pasa de array de objetos a un array ----
    let ac = countryFound.Activities.map(function(obj) {
        return obj.dataValues.name;
      });
    countryFound.dataValues.Activities=(ac);
    // ---------------------------------------------

    return countryFound.dataValues;
};

module.exports = { countryActivitiesByID };