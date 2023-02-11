const { Country, Activity, CountryActivity } = require("../db");
const { Op } = require("sequelize");



async function findActivityByPk(id){
    return await Activity.findByPk(id)
}

async function findCountryByPk(id){
    return await Country.findByPk(id)
}

async function addExistingActivitiesToCountries ( arrayActivities, arrayCountries )
{
    //console.log(arrayActivities);
    let foundActivities = []
    let notFoundActivities = []
    let notFoundCountry = []
    //console.log(await findActivityByPk(1))
    console.log("------------------------------------");
   // console.log(await CountriesActivities.findAll())

  // console.log( await CountryActivity.findAll())

//    sequelize.query("SELECT * FROM CountryActivity").then(([results, metadata]) => {
//     console.log(results);
//   });

    //const aux = await findActivityByPk(111)
    //console.log(aux)
    // console.log(foundActivities)



     // esto es un array de los paises que tiene la actividad 1.
    //  const awesomeCaptain = await CountryActivity.findAll({
    //     where:{
    //         ActivityId: { [Op.in]: arrayActivities},
    //        // CountryID: { [Op.in]: arrayCountries}
    //     },
    //   });
    //   console.log("++++++++++++++++++++");
    //   console.log(awesomeCaptain[0].dataValues.CountryID);
    //   // Do stuff with the fetched captain
    //   console.log("++++++++++++++++++++");
    //   console.log(awesomeCaptain.length)

    //   for(let i = 0; i < awesomeCaptain.length; i++) {
    //     if(awesomeCaptain[i])
    //         console.log("***************************");
            
    //        console.log('Country Name que tiene las acti:',awesomeCaptain[i].dataValues.CountryID);
    //        //foundActivities.push(awesomeCaptain[i].dataValues.CountryID)
    //         console.log("***************************");

    //   };
    //   console.log("ACTIVIDADES ID 18",foundActivities);


     console.log("------------------------------------");
    arrayActivities.forEach( async(element) => {
        console.log(element)
        let foundActivities = []
        //const aux = await findCountryByPk(element)
        
        let a = await CountryActivity.findAll({
            where:{
                ActivityId: element,
               // CountryID: { [Op.in]: arrayCountries}
            },
          });

          for(let i = 0; i < a.length; i++) {
            if(a[i])
            //     console.log("***************************");
                
            //    console.log('Country Name que tiene las acti:',a[i].dataValues.CountryID);
               foundActivities.push(a[i].dataValues.CountryID)
              //  console.log("***************************");
          };

          console.log(arrayCountries)
          console.log("**************************************");

          console.log(`PAISES CON LA ACTI ID ${element} `,foundActivities);

          const commonStrings = arrayCountries.filter(string => !foundActivities.includes(string));
          console.log(`PAISES sin LA ACTI ID ${element} `, commonStrings)

          //let lucio = { CountryID: , ActivityId:}


          // HAY QUE REVISAR COMO CREAR EL ELEMENTO NUEVO EN LA TABLA COUNTRYACTIVITY
          commonStrings.forEach( async (e)=> {
            //const hola = await CountryActivity.create({ e, element});
            // console.log("+++++++++++++++++");
            // console.log(element, " * ", e);
            // console.log("+++++++++++++++");
          });
          
    });    



          // const newActivity = await Activity.create(
        //     {ID, name, difficulty, duration, season});

           // arrayCountries.forEach(element => {
          //     newActivity.addCountry(element)
           // });






        //   const uniqueStrings = Array.from(new Set([...foundActivities, ...arrayCountries]));
        //   console.log("PAISES SIN LA ACTI 18", uniqueStrings)
          
        

        // if(aux){

        //     console.log(aux.dataValues.id)
    
        // }
        // else {
        //     notFoundCountry.push(element);
        //     console.log(`la activity ${element} no existe`)
        // }
    




    // arrayActivities.forEach(async (element) => {
    //     console.log(element);
    //     const aux = await findActivityByPk(element)

    //     console.log("+++++++++++++++++++++++++++++++++++++++++");

    //     console.log(aux.dataValues);
    //     console.log("+++++++++++++++++++++++++++++++++++++");

    //     arrayCountries.forEach(async element => {
    //         const aux1 = await findCountryByPk(element)
    //         console.log(aux1.dataValues)
    //         aux.dataValues.addCountry(aux1.ID)
    //     });

    //     // if(aux.dataValues){
    //     //     foundActivities.push(aux.dataValues);
    //     //     console.log(foundActivities)

    //     // }
    // });
    console.log("------------------------------------");

    // esto es un array de los paises que tiene la actividad 1.
   
      // Get the join table


     // console.log((await CountryActivity.findAll()))


    // sequelize.models.CountryActivity.findAll().then(userGroups => {
    //     console.log(userGroups);
    // });

      //Now we want information about his ship!
      //const hisShip = await Activity.getCountry();

    //   // Do stuff with the ship
    //console.log('country ID:', hisShip.ID);
    //   //console.log('Amount of Sails:', hisShip.amountOfSails);


   // console.log(foundActivities)
    console.log("------------------------------------");

    // const newActivity = await Activity.create(
    //     {ID, name, difficulty, duration, season});

    // arrayCountries.forEach(element => {
    //     newActivity.addCountry(element)
    // });
        
    // return newActivity;

};

module.exports = {addExistingActivitiesToCountries};