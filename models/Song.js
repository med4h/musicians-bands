const { DataTypes, Model } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
//let Song;

class Song extends Model {}


Song.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
},{
    sequelize,
    modelName: 'Song'
});


module.exports = {
    Song
};