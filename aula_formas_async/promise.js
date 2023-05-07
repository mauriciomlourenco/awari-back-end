const fs = require('fs');

const path = 'C:/Users/t002152/Desktop/Awari/back-end/Git/awari-back-end/aula_formas_async/arquivos';

/*
function escrita() {
    return new Promise((resolve, reject) => {});
}
*/
const escrita = (pathFileName, conteudo) => new Promise((resolve, reject) => {
    fs.writeFile(pathFileName, conteudo, "UTF-8", () => {        
        resolve(console.log("Arquivo criado com sucesso!"));        
    });
});

const leitura = (pathFileName) => new Promise((resolve, reject) => {
    fs.readFile(pathFileName, "UTF-8", (err, contents) => {
        if(err){
            reject(console.error(err));
        }
        else {
            resolve(contents);
        }
    });
});

escrita(path + "/arquivo1.txt", "Arquivo Promise")
.then(() => leitura(path + "/arquivo1.txt"))
.then(result => console.log(result))

/*
//util => promisify
const { promisify } = require('util')

// Usando promisify para lidar com o setTimeout
const calculaDobro = async (numero) => {
    return await promisify(setTimeout)(2000, numero * 2)
}
*/

const fs2 = require('fs/promises');

let arquivo2 = fs2.readFile(path + "/arquivo1.txt", "UTF-8")
arquivo2.then( result => console.log("Com fs/promises: ", result));

const { promisify } = require('util');

// bibliotecas que não possuem promise nativo
const espera = (t) => new Promise((resolve, reject) => {
    setTimeout(()=> resolve(), t * 1000);
});

// verficar se o util.promisify atende a biblioteca legada
const espera2 = (t) => promisify(setTimeout)(t*1000)

console.log(1)
espera2(3)
    .then(console.log(2))
    .then(espera2(3))
    .then(console.log(3))