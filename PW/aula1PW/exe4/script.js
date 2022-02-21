var btnEnviar = document.querySelector("#btnEnviar")

function checarTresNumeros() {
    let nums = []
    let responseField = document.querySelector(".response")
    nums[0] = Number(document.querySelector('.firstNumber').value)
    nums[1] = Number(document.querySelector('.secondNumber').value)
    nums[2] = Number(document.querySelector('.thirdNumber').value)
    /*o metodo array.sort() ordena um array por meio de uma function de callback, nessa funtion utilizamos dois
    argumentos com a e b, para definir a logica de ordenamento do array */
    nums = nums.sort((a, b) => {
        if (a >b) return 1;
        if (a <b) return -1
    })
    responseField.innerHTML = `${nums[0]},  ${nums[1]}, e ${nums[2]}`
    console.log(nums)
}
btnEnviar.addEventListener("click", checarTresNumeros)

