const calc = require('./modulos/calculadora');
const pessoa = require('./modulos/pessoa');

console.log(calc);

calc.soma();
calc.subtracao();
calc.multiplicacao();
calc.divisao();

//pessoa = {nome: "João", sobrenome:"Silva", idade: 20 }
pessoa['pessoa'].nome = "Teste"
console.log(pessoa);