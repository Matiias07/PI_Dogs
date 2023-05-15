const createNewDog = require('../controllers/createNewDog');

const newDog = async (req, res) => {
    try{
    const result = await createNewDog(req.body);
    return res.status(200).json(result);
} catch(error){
    return res.status(500).send(error.message);
}
};

module.exports = newDog;