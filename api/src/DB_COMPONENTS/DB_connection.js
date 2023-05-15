const { apiRequestDog } = require('./request_api');
const { Dog, Temperaments } = require('../db');


const DB_connection = async () => {
    const apiDog =  await apiRequestDog();
    let uniqueTemperaments = [];
    for(let i = 0; i < apiDog.length; i++){
        const dog = apiDog[i];
        const temperaments = dog.temperament;
        const tempArray = temperaments?.replaceAll(' ', '').split(',');

        if(tempArray){
            for(let j = 0; j < tempArray.length; j++){
            const temperament = tempArray[j];
            const alreadyExist = uniqueTemperaments.findIndex((value) => temperament === value?.name) !== -1;
            if(!alreadyExist){
                uniqueTemperaments.push({
                    name: temperament
                })
            }
        }
        }
    };
    
    const result = Promise.all([Dog.bulkCreate(apiDog), Temperaments.bulkCreate(uniqueTemperaments)])
    return result;
};

module.exports = DB_connection;