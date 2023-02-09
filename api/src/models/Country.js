const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    ID: {
      type: DataTypes.STRING(3),
      unique: true,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    flag: {
      type: DataTypes.TEXT,
      allowNull: false,
    },


    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    continent: {
      type: DataTypes.
          //ENUM("America", "Europa", "Asia", "Africa", "Oseania", "Unknown"),
          ENUM(
          "Antarctic", "Africa", "Asia", 
          "Europe", "North America", "Oceania", 
          "South America", "Americas",
          "Unknown"),
      defaultValue: "Unknown",
      allowNull: false,
    },

    subregion: {
      type: DataTypes.
          //ENUM("Norte", "Sur", "Este", "Oeste", "Centro", "Unknown"),
          ENUM(
          "Australia and New Zealand", "Caribbean", "Central America", 
          "Central Asia", "Central Europe", "Eastern Africa", 
          "Eastern Asia", "Eastern Europe", "Melanesia", 
          "Micronesia", "Middle Africa", "North America", 
          "Northern Africa", "Northern Europe", "Polynesia", 
          "South America", "South-Eastern Asia", "Southeast Europe", 
          "Southern Africa", "Southern Asia", "Southern Europe", 
          "Western Africa", "Western Asia", "Western Europe", 
          "Unknown"),
      defaultValue: "Unknown",
    },
    
    area: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
    },

    population: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    timezone: {
      type: DataTypes.STRING,
      defaultValue: "-", 
    },
    
    maps: {
      type: DataTypes.STRING,
      //allowNull: false,
    },

  });
};
