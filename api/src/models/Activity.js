const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true
        },
        difficulty: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              max: 5,
              min: 1
          },
          allowNull: true
        },
        duration: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        season: {
          type: DataTypes.ENUM,
          values: ['summer', 'winter', 'spring', 'autumn'],
          allowNull: true
        }
    });
};


//id
//name
//season 