const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Band model
let Band = 

class Band extends Model {}


Bands.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
},{
    sequelize,
    modelName: 'Band'
});



module.exports = {
    Band
};