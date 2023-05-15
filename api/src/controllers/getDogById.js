const { Dog, Temperaments } = require('../db');

const dogById = async (idRaza) => {
    if(typeof idRaza === 'string'){
        const idParseado = Number(idRaza)
    return await Dog.findByPk(idParseado, {
        include: Temperaments
    })} 
};

module.exports = dogById;