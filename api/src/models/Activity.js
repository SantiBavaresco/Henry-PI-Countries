const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
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

    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            min: 1,
            max: 5,
          }
    },

    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            min: 1,
            max: 24,
          }
    },

    season: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera", "Todo el año"),
        allowNull: false,
        defaultValue: "Todo el año",
    },

  });
};