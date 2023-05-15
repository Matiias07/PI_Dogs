const { Temperaments } = require('../db');

const allTemperaments = async () => {
    const temperament = await Temperaments.findAll();
    return temperament;
};

module.exports = allTemperaments;