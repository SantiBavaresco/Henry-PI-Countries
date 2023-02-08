require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

// SQL SHELl = 
//  \l chequeo la lista de base de datos
//  \c para conectar a la base de datos
//  \dt para mostrar toda las tablas de la DB
//  SELECT * FROM "Users"

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
//const { Pokemon } = sequelize.models;

// ---------------------------------------------------------------------------------------------------------------------

// import axios from "axios";
const axios = require('axios');
const { count } = require('console');
//const { Country } = require('./db')



async function storeData() {
  const apiDB = await axios.get('https://restcountries.com/v3.1/all');

      // console.log(Object.keys(data));
      //console.log(Object.keys(apiDB.data[0])); // Atributos del data.data

      console.log(apiDB.data[0].name.common); // luxenburgo
//
      //console.log(data.data.length) // 250 objetos
  
  
  
  let continents = []
  let filterAttributesCountry = {}
 // const item = apiDB.data; 

  filterAttributesCountry = apiDB.data.map( (item) => {
    //console.log(item.name.common)
    return {
        ID: item.cca3,
        name: item.name.common,
        flag: item.flags.png,
        capital: item.capital, 
        continent: item.region, 
        subregion: item.subregion, 
        area: item.area, 
        population: item.population, 
        timezone: item.timezones,
    }
  })

  //console.log(filterAttributesCountry)

  //const newCountry = await Country.create(filterAttributesCountry);



  // return sequelize.transaction(async (t) => {
    for (const item of apiDB.data) {
      // const flags = Object.values(item.flags)
      // const map = Object.values(item.maps)
      // let c = Object.values(item.subregion);
      // continents.push(item.subregion)

      
      // const newCountry = await Country.create({
      //   ID:item.cca3, name, flag, capital, continent, subregion, area, population, timezone });
      
      //console.log(`(${item.cca3})`)

      // console.log(`(${item.cca3}) ${item.name.common},
      //   -> Poblacion: ${item.population}
      //   -> Bandera: ${item.flags.png}
      //   -> Capital: ${item.capital}
      //   -> Continente: ${item.region}
      //   -> Subregion: ${item.subregion}
      //   -> Superficie: ${item.area} km2
      //   -> Zona Horaria: ${item.timezones}
      //   -> Map: ${item.maps.openStreetMaps}
      // `); // me lista el nombre de los paises
      //await Model.create(item, { transaction: t });
    }
    // console.log(continents)
    // let unique = Array.from(new Set(continents));

    // function removeDuplicates(arr) {
    //   return arr.filter((item,
    //       index) => arr.indexOf(item) === index);
    // }
    // console.log(removeDuplicates(continents));


    // console.log(continents)
  // });
  //console.log(filterAttributesCountry);
};

//storeData();
// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
