let numeros = []
let impares = []
let pares = []

for (let i = 0; i < 14; i++) {
    numeros[i] = Number(prompt("digite um numero: "))

    if (isNaN(numeros[i]) == true) {
        throw alert("erro, voce inseriu um valor em texto, insira apenas numeros");
        break;
    }
    else {
        continue;
    }
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares[i] = numeros[i]
    }
    else if (numeros[i] % 2 != 0) {
        impares[i] = numeros[i]
    }

    else {
        throw alert("um erro doido aconteceu")
    }
}

impares.filter((x) => {
    if (x != undefined)
        return x;
})

pares.filter((x) => {
    if (x != undefined)
        return x;
})

// preciso de todas as formas aprender a remover indices de arrays vazios//


document.write("os impares Sao: " + impares)
document.write("os numeros pares sao: " + pares)

