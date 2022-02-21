document.querySelector(".btnEnviar").addEventListener('click', () => {

    try {
        let num = Number(document.querySelector(".inputNumber").value)
        let responseField = document.getElementById("responseField")
        let tabuada = []

        if (isNaN(num) == true) {
            alert("insira apenas numeros")
        } else {
            for (let i = 0; i <= 10; i++) {
                tabuada[i] = `${num} X ${i} = ${num * i} `

                let li = document.createElement('li')
                let textNodeTabuada = document.createTextNode(tabuada[i]);
                li.appendChild(textNodeTabuada);
                responseField.appendChild(li);
            }
        }
    } catch (exception) {
        alert(exception)
    }
})