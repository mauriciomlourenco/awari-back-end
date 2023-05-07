const express = require('express');

const routes = express.Router();

//aluno
routes.get('/alunos', (req, res) => res.send(recuperaAlunos()));


// 2 tipos de parametros relacionados ao params e o queries

// queries
routes.get('/alunos/aluno/', (req, res) => {
    /*let query = req.query
    let id = req.query.id;*/
    res.send(`alunos: ${req.query.id}, nome: ${req.query.name}`);
});

//params - alunos/id/name
routes.get('/alunos/:id/:name', (req, res) => {
    let id = req.params.id;
    let name = req.params.name;
    //const alunos = recuperaAlunos();
    //res.send(`aluno ${alunos[id - 1]}, nome: ${name}`);
    res.send(`aluno ${id}, nome: ${name}`);
})

routes.post('/alunos', (req, res) => {
    let corpo = req.body;
    res.send({"msg" : "Aluno criado com sucesso!", ...corpo});
    console.log(corpo);
});

// function recuperaAlunos(req) {
//     if(!req.query.id){
//         return ['aluno1', 'aluno2', 'aluno3'];
//     }
//     else 
//         return `alunos: ${req.query.id}, nome: ${req.query.name}`
// }

function recuperaAlunos() {    
    return ['aluno1', 'aluno2', 'aluno3'];   
}

module.exports = routes;