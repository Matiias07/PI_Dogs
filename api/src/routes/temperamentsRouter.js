const { Router } = require('express');
const temperamentsRouter = Router();
const allTemperamentsHandler = require('../handlers/allTemperaments');


temperamentsRouter.get('/', allTemperamentsHandler);

module.exports = temperamentsRouter;