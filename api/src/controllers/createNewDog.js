const { Dog, Temperaments } = require("../db");

const newDog = async ({
    image,
    name,
    height,
    weight,
    life_span,
    temperaments
}) => {
    const dog = await Dog.create({
        image,
        name,
        height,
        weight,
        life_span
    });
    for (i = 0; i < temperaments.length; i++) {
        const id = temperaments[i];
        const temperament = await Temperaments.findByPk(id);
        if (temperament) {
            await dog.addTemperaments(temperament);
        }
    }
    return dog;
};

module.exports = newDog;
