const express = require('express');

const routes = express.Router();

const controllerAlunos = require('../controller/controller_alunos');



routes.get('/alunos', controllerAlunos.readAlunos);
routes.post('/alunos', controllerAlunos.createAlunos);
routes.put('/alunos', controllerAlunos.updateAlunos);
routes.delete('/alunos', controllerAlunos.deleteAlunos);

module.exports = routes;
