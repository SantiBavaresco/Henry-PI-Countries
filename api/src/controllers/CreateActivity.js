const {Activity} = require("../db");

async function createActivity ( {ID, name, difficulty, duration, season} )
{
    const newActivity = await Activity.create(
        {ID, name, difficulty, duration, season});
    return newActivity;
};

async function createCountryActivity ({ID, name, difficulty, duration, season, arrayCountries})
{
    const newActivity = await Activity.create(
        {ID, name, difficulty, duration, season});

    arrayCountries.forEach(element => {
        newActivity.addCountry(element)
    });
    return newActivity;
};

function assingCountryActivity(){

}

module.exports = {createActivity, createCountryActivity};