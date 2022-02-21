try {
    document.querySelector(".btnEnviar").addEventListener('click', () => {
        let resField = document.getElementById("resField")
        let inputWord = document.querySelector(".inputWord")
        let word = String(inputWord.value)

        if (word.match(/[1-9]/)) {
            throw alert("nao sao permitidos numeros")
        }

        for (let i = 0; i <= 4; i++) {
            let h1 = document.createElement('h2')
            let txtForH1 = document.createTextNode(word.repeat(i))  // string.repeat(num) === esse metodo repete determido numero de vezes uma string.
            h1.appendChild(txtForH1)
            resField.appendChild(h1)
        }

    })
} catch (exception) {
    console.error(exception);
}