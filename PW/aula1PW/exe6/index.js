document.querySelector(".btnEnviar").addEventListener('click', () => {
    let numMes = Number(document.querySelector(".numMes").value);
    let res = document.querySelector(".responseField")

    switch (numMes) {
        case 1:
            msg = "Você está em Janeiro"
            res.innerHTML = msg
            console.log("janeiro")
            break;

        case  2:
            msg = "Você está em Fevereiro"
            res.innerHTML = msg
            break;

        case 3:
            msg = "Você está em  Março"
            res.innerHTML = msg
            break;

        case 4:
            msg = "Você está em Abril"
            res.innerHTML = msg
            break;

        case 5:
            msg = "Você está em  Maio"
            res.innerHTML = msg
            break;

        case 6:
            msg = "Você está em Junho"
            res.innerHTML = msg
            break;

        case 7:
            msg = "Você está em  Julho<"
            res.innerHTML = msg
            break;

        case 8:
            msg = "Você está em Agosto"
            res.innerHTML = msg
            break;

        case 9:
            msg = "Você está em Setembro"
            res.innerHTML = msg
            break;

        case 10:
            msg = "Você está em Outubro"
            res.innerHTML = msg
            break;

        case 11:
            msg = "Você está em Novembro"
            res.innerHTML = msg
            break;

        case 12:
            msg = "Você está em Dezembro"
            res.innerHTML = msg
            break;
            
        default : alert("ERRO, digite um numero valido")
        break;
    }
})