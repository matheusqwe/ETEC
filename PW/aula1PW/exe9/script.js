try {
    let stringPalavrasSol = prompt("Digite o numero de vezes que deseja Imprimir a Palavra SOL")
    let vezes = Number(stringPalavrasSol)
    let palavras = []

    if (isNaN(vezes) == true) throw alert("ERRO! digite apenas numeros");

    for (let i = 0; i < vezes; i++) {
        palavras[i] = "SOL"
    }
    document.querySelector(".campoDeResposta").innerHTML = `${palavras}  <br> Foram Escritas ${vezes} vezes a Palavra SOL`

} catch (exception) {
    alert(exception)
}