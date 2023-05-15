const { Dog } = require('../db');

const allDogs = async () => {
    const dogs = await Dog.findAll();
    return dogs;
};

module.exports = allDogs;