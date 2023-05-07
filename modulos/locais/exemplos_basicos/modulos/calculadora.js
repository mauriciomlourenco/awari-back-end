/*
function soma(x, y) {
    console.log("função soma");
}

function subtracao(x, y) {
    console.log("função subtração");
}

function multiplicacao(x, y) {
    console.log("função multiplicação");
}

function divisao(x, y) {
    console.log("função divisão");
}
function resto(x, y) {
    console.log("resto da divisão");
}

module.exports = { soma, subtracao, multiplicacao, divisao, resto };
*/

// ou
exports.soma = function(x, y) {
    console.log("função soma");
}

exports.subtracao = function(x, y) {
    console.log("função subtração");
}

exports.multiplicacao = function(x, y) {
    console.log("função multiplicação");
}
exports.divisao = function(x, y) {
    console.log("função divisão");
}
exports.resto= function(x, y) {
    console.log("resto da divisão");
}

exports.pi = 3.14;

//funcional
//require
//exports

//import e export => traz mais contexto e escopo no processo