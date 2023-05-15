const { Router } = require('express');
const dogsRouter = Router();
const allDogsHandler = require('../handlers/allDogs');
const dogRaza = require('../handlers/dogById');
const newDog = require('../handlers/newDog')



dogsRouter.get('/:idRaza', dogRaza);
dogsRouter.get('/', allDogsHandler);
dogsRouter.post('/', newDog);

module.exports = dogsRouter;