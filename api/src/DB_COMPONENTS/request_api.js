const URL = 'https://api.thedogapi.com/v1/breeds';
const axios = require('axios');
const { Dog } = require('../db');



const apiRequestDog = async () => {
    const dogCount = await Dog.count();
    if (dogCount === 0) {
        const { data } = await axios.get(URL);
        const dogs = data.map(dog => {
            return {
                image: dog.image?.url,
                name: dog.name,
                height: dog.height.metric,
                weight: dog.weight.metric,
                life_span: dog.life_span,
                temperament: dog?.temperament
            }
        })
        return dogs;
    }
};


module.exports = {
    apiRequestDog
};