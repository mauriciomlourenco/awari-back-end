function calcularMedia(){
    let notasTxt = document.getElementById("notas").value;
    let notas = notasTxt.split(" ");
    let somaNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaNotas += parseFloat(notas[i])
        document.write(`Nota ${i+1} é ${notas[i]}<br>`)
    }

    // notas.array.forEach(nota => {
    //     somaNotas += nota
    // });

    let media = somaNotas / notas.length
    document.write(`A media de notas da sala é: ${media}<br>`)

}