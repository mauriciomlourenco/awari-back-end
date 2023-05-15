const model = require('../model/model_alunos');
// CRUD consegue ter relação com os verbos do HTTP (POST, GET, PUT E DELETE)

const createAlunos = async (req, res) => {
    console.log(req.body);
    let aux = await model.create(req.body);
    aux ? res.send({'created': 'ok'}) : res.send({'created': 'error'});
};

const  readAlunos = async (req, res) => {
    let alunos = await model.read();
    alunos ? await res.send({alunos}): res.status(500).send({"error": "recurso não disponível"});
};

const updateAlunos = async (req, res) => {
    await res.send({...model.update()});
};

const deleteAlunos = async (req, res) => {
    let aux =  await model.deleteAll();
    aux ? res.send({'deleted': 'ok'}) : res.send({'deleted': 'error'});
    
};

module.exports = { createAlunos, readAlunos, updateAlunos, deleteAlunos}

// OPERADOR TERNÁRIO
/*
if(aux) { verdade} else {mentira}

aux ? verdade : mentira
 */