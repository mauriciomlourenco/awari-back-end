const fs = require('fs');

const path = 'C:/Users/t002152/Desktop/Awari/back-end/Git/awari-back-end/aula_formas_async/arquivos';


// Famoso CALLBACK HELL
fs.writeFile(path + '/teste.txt', "Arquivo de teste 1", 'UTF-8', () => {
    console.log("Arquivo criado com sucesso!");
    fs.readFile(path + '/teste.txt', (err, contents) => {
        console.log("Arquivo 1 lido!");
        console.log(contents);
        fs.writeFile(path + '/teste2.txt', "Arquivo de teste 2", 'UTF-8', () => {
            console.log("Arquivo 2 criado com sucesso!");
            fs.readFile(path + '/teste2.txt', (err, contents) => {
                console.log("Arquivo 2 lido!");
                console.log(contents);
            })
        });
    });
});
