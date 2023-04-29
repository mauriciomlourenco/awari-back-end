// url é um módulo/biblioteca que permite o tratamento da url

const url = require('url');

//url = host + path + parameters
// www.facebook.com / lpajunior/foto/ id=3

let endereco = 'http://localhost:8080/perfil123/fotos/?year=2023&month=Jan';

let endereco_tratado = url.parse(endereco, true);

console.log(endereco_tratado.host); // http://localhost:8080/
console.log(endereco_tratado.pathname); // /perfil123/fotos/
console.log(endereco_tratado.search); // year=2023&month=Jan

let endereco_parametros = endereco_tratado.query; // {year: 2023, mont: 'Jan',}
console.log(endereco_parametros.year);
console.log(endereco_parametros.month);