const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('genres_videogames', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  });
};
