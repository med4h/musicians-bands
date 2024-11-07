const { DataTypes, Model } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Musician model
//let Musician;

class Musician extends Model {}

Musician.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
},{
    sequelize,
    modelName: 'Musician'
});

module.exports = {
    Musician
};