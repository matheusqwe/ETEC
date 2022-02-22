document.querySelector(".btnEnviar").addEventListener('click', () => {

    let numRadioativo = Number(document.querySelector(".numRadioativo").value)
    let segundos = 30;

    for (let i = 0; numRadioativo > 0.6; i++) {
        segundos = segundos + 30;
        numRadioativo = numRadioativo / 4
    }

    console.log("durou " + segundos + "segundos")
    console.log(numRadioativo)

})