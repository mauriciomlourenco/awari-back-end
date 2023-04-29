/**  Promises - sabemos que em virtude do async do javascript, teremos o callback
 * e o callback não é um processo executado de maneira sync / resolução instatânea
 * entãoi criamos a promessa
 * pois assim conseguimos encadear os passos do fluxo de execução
 * **/

const fs = require('fs');

const path1 = "C:/Users/t002152/Desktop/Awari/back-end/Git/awari-back-end/aula_async_sync/files/teste.txt";
const path2 = "C:/Users/t002152/Desktop/Awari/back-end/Git/awari-back-end/aula_async_sync/files/teste2.txt";

const lerArquivo = ( caminhoDoArquivo) => new Promise((resolve, reject) => {
    fs.readFile(caminhoDoArquivo, 'UTF-8', (err, contents) =>{
        if(err){
            reject(err);
        } else {
            resolve(contents)
        }
    })
})

let arquivo1 = lerArquivo(path1);
console.log(arquivo1);

arquivo1.then( result => {
    console.log(result);
    return lerArquivo(path2)
}). then( result => {
    console.log(result);
});
