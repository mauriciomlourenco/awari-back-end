// FS modulo/biblioteca nativa para manipulação de arquivos

const fs = require('fs');

const path = "C:/Users/t002152/Desktop/Awari/back-end/Git/awari-back-end/aula_async_sync/files";

fs.writeFile(path+"/teste.txt", "Arquivo teste", "UTF-8", () => console.log("Arquivo criado com sucesso!"));

let file1 = fs.readFile(path+"/teste.txt", "UTF-8", () => console.log("Arquivo lido com sucesso!"));
console.log(file1);
let file2 = fs.readFileSync(path+"/teste.txt", "UTF-8");
console.log(file2);

// Promise ou AsyncAwait