const express = require('express');

const app = express();
const port = 3000;
const routes  = require('./view_routes/route_alunos');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Antes de carregar as rotas é preciso configurar como será o comportamento das requests
app.use(routes);
app.listen(port);