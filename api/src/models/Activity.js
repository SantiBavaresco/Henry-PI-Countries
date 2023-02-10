const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
     
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
        type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring", "All year"),
        allowNull: false,
        defaultValue: "All year",
    },

  });
};