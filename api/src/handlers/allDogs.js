const allDogs = require('../controllers/getDogsData');

const allDogsHandler = async (req, res) => {
    try{
        const { name } = req.query;
    

    const dogsTotal = await allDogs();

    if(name) {
        const dogsName = await dogsTotal.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));

        dogsName.length ? res.status(200).send(dogsName) : res.status(404).send('El perro no existe')
    } else {
        return res.status(200).send(dogsTotal);
        }
        } catch(error){
            return res.status(500).send(error.message);
        }
};

module.exports = allDogsHandler;