function calcularQuadrado(){
    let numerosTxt = document.getElementById("numeros").value;
    let numeros = numerosTxt.split(" ");    

    numeros.forEach(numero => {
        let quadrado = parseInt(numero) * parseInt(numero)
        document.write(`O quadrado de ${numero} é: ${quadrado}<br>`)
    });     

}