const {Router} = require('express'); 
const CepController = require('./controller/CepController');
const routes = Router();

routes.post('/cep', CepController.index);

module.exports = routes;