const axios = require('axios');
const fs = require('fs/promises');

const fatosDeGato = "https://catfact.ninja/fact";

axios.get(fatosDeGato)
    .then((response) => console.log(response.data));

//IIEF

let path = "C:/Users/t002152/Desktop/Awari/back-end/Git/awari-back-end/aula_npm_json/axios/arquivos"

async function teste() {
    //const { data } = await axios.get(fatosDeGato);
    let fatos = await axios.get(fatosDeGato);
    fatos = JSON.stringify(fatos.data);

    await fs.writeFile(path + "/fatosDeGato.txt", "Teste: " + fatos, "UTF-8");
    let arquivo = await fs.readFile(path +"/fatosDeGato.txt", "UTF-8");
    console.log(arquivo);
}

teste()