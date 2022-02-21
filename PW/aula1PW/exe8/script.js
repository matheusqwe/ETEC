document.querySelector(".btnEnviar").addEventListener('click', () => {

    let inputNum = document.querySelector(".inputNumber").value
    let num = Number(inputNum)
    let res = document.querySelector(".divResponse")
    let resNums = []
    let produtos = []

    for (let i = 0; i < num; i++) {
        resNums[i] = i
    }

    for (let i = 0; i < resNums.length; i++) {
        produtos[i] = resNums[i] * num
    }

    res.innerHTML = `<h1> De 0 ate ${num} temos: ${resNums}  <br> E os do proutos dos desse numeros por ${num} sao: ${produtos}</h1>`

})

