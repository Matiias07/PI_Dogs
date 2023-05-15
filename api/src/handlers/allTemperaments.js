const allTemperaments = require('../controllers/getTemperamentsData');

const allTemperamentsHandler = async (req, res) => {
    try{

    const temperamentsTotal = await allTemperaments();

    return res.status(200).send(temperamentsTotal);

    } catch(error){
        return res.status(500).send(error.message);
    }
};

module.exports = allTemperamentsHandler;
