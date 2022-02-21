var firstNumber = document.querySelector(".firstNumber")
var secondNumber = document.querySelector(".secondNumber")
var resultField = document.querySelector(".resultField")
var btnSend = document.querySelector(".btnSend")
let one = Number(firstNumber.value)
let two = Number(secondNumber.value)
var addOperation = one + two

function add() {
    if (addOperation > 20) {
        addOperation += 8
        resultField.innerHTML = `O seu Resultado e: ${addOperation}`
    } else {
        addOperation -= 5
        resultField.innerHTML = `O seu Resultado e: ${addOperation}`
    }
}
btnSend.addEventListener('click', add)