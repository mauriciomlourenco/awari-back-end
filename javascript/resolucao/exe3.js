function maiorNumero(){
    let numerosTxt = document.getElementById("numeros").value;
    let numeros = numerosTxt.split(" ");
    
    let maior = 0;

    for (let i = 0; i < numeros.length; i++){
        if (parseInt(numeros[i]) > maior){
            maior = parseInt(numeros[i]);
        }
    }

    document.write(`O maior número é: ${maior}<br>`)    

}