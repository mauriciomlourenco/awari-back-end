/**
 * Async Await é uma maneira mais elegante de se utilizar de promise
 * continua com o objetivo de serializar a execução
 * tratamos funções de contexto assíncrono como se fosse síncrono
 */

/*async function calculaDobro(numero){
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve(numero*2), 1000)
    })
    
}*/

//util => promisify
const { promisify } = require('util')

// Usando promisify para lidar com o setTimeout
const calculaDobro = async (numero) => {
    return await promisify(setTimeout)(2000, numero * 2)
}


let resultado = calculaDobro(10);
resultado
    .then(result => resultado = calculaDobro(result))
    .then(result => console.log(result));