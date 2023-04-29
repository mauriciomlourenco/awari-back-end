// crie uma lógica que valide duas leituras para calibração de bomba, sabendo que a segunda aconteceu 3 segundos depois da primeira
let leitura1 = 0;
let leitura2 = 0;

const primeiraLeitura = () => new Promise ((resolve, reject) => {
    resolve(leitura1 = 30);
})
    

const segundaLeitura = () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(leitura2 = 30);
    }, 2000);
});

const validacaoLeitura = () => new Promise ((resolve, reject) => {
    if (leitura1 > leitura2) {
        resolve(console.log("Validação - ok"));
    }
    else if (leitura1 === leitura2) {
        resolve(console.log("Falha na leitura - erro"));
    }
    else {
        reject(console.log("defeito no instrumento"));
    } 
});
    

primeiraLeitura()
    .then(result => segundaLeitura())
    .then( result => validacaoLeitura())
