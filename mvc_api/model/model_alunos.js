const fs = require("fs/promises");
const fs2 = require("fs");
const fileName = 'C:/Users/t002152/Desktop/Awari/back-end/Git/awari-back-end/mvc_api/alunos/alunos.txt'



const verifyFileExist = async () => {
    // fs.readFile(fileName, fs.F_OK, (err) => {
    //     if (err) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // })
    return await fs2.existsSync(fileName);
}
const create = async (aluno) => {
    if(verifyFileExist()){
        await fs.appendFile(fileName, JSON.stringify(aluno), "UTF-8")
        return true;
    } else {
        await fs.writeFile(fileName, JSON.stringify(aluno), "UTF-8");
        return true;
    }
    
}

const read = async () => {
    try{
        return await fs.readFile(fileName, "UTF-8");
    } catch(err) {
        console.error(err);
        return null;
    }
}

const update = async () => {
    return{ "error" : "não disponível"}
}

const deleteAll = async () => {
    try {
        await fs.unlink(fileName);
    return true;
    } catch(err) {
        console.log(err);
        return false;
    }
}

module.exports = {create, read, update, deleteAll}
