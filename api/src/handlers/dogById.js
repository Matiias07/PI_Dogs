const dogById = require('../controllers/getDogById');

const dogRaza = async (req, res) => {
    try{
    const { idRaza } = req.params;
    const dogInfo = await dogById(idRaza);
    return res.status(200).json(dogInfo)
} catch(error){
    return res.status(500).send(error.message)
}
};

module.exports = dogRaza;
