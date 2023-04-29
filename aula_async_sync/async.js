// Imprima os valores dados na ordem: 1, 2 e 3
/*
console.log(1);
setTimeout(() => console.log(2), 2000);
console.log(3);
*/

// callback é uma maneira de explorar o sincronismo
/*console.log("Segundo exemplo: \n");
console.log(1);
setTimeout(() =>{
    console.log(2);
    setTimeout(() => console.log(3), 1000);
}, 5000)
*/

// crie uma lógica que valide duas leituras para calibração de bomba, sabendo que a segunda aconteceu 3 segundos depois da primeira
let leitura1 = 0;
let leitura2 = 0;

function primeiraLeitura (callback){
    leitura1 = 30;
    callback();
}

function segundaLeitura (callback){
    setTimeout(() => {
        leitura2 = 30;
        callback();
    }, 2000);
    
}

function validacaoLeitura () {
    if (leitura1 > leitura2) {
        console.log("Validação - ok");
    }
    else if (leitura1 === leitura2) {
        console.log("Falha na leitura - erro");
    }
    else {
        console.log("defeito no instrumento");
    }
}

/*primeiraLeitura();
console.log(leitura1);
segundaLeitura();
console.log(leitura2);
validacaoLeitura();*/

primeiraLeitura(
    () => {
        segundaLeitura(() => validacaoLeitura());
    });

// Teste de callback implicito
function teste(callback){
    setTimeout(() => {
        console.log("1");
        callback();
    }, 2000)
}

function teste2(){
    console.log("2");
}

teste(() => teste2());