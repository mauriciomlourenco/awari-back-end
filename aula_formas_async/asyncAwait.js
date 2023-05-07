const fs = require('fs/promises');

const path = 'C:/Users/t002152/Desktop/Awari/back-end/Git/awari-back-end/aula_formas_async/arquivos';

async function leiturasEEscritas() {
    await fs.writeFile(path + '/teste4.txt', "teste com async await", "UTF-8");
    let arquivo4 = await fs.readFile(path + '/teste4.txt', "UTF-8");

    await fs.writeFile(path + '/teste5.txt', arquivo4 + " 2", "UTF-8");
    let arquivo5 = await fs.readFile(path + '/teste5.txt', "UTF-8");

    console.log(arquivo4);
    console.log(arquivo5);
}

leiturasEEscritas();