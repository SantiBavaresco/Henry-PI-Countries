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
      type: DataTypes.ENUM("America", "Europa", "Asia", "Africa", "Oseania", "Sin especificar"),
      defaultValue: "Sin especificar",
      allowNull: false,
    },

    subregion: {
      type: DataTypes.ENUM("Norte", "Sur", "Este", "Oeste", "Centro", "Sin especificar"),
      defaultValue: "Sin especificar",
    },
    
    area: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
    },

    population: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });
};
