var btnEnviar = document.querySelector(".btnEnviar")

function typeOfTriangle() {
    let aSide = Number(document.querySelector(".A").value)
    let bSide = Number(document.querySelector(".B").value)
    let cSide = Number(document.querySelector(".C").value)
    console.log(aSide + bSide + cSide)

    let labelForImage = document.querySelector(".divlForImage")
    let response = document.querySelector(".response")
    let type


    if (aSide == bSide && cSide != cSide || aSide == cSide != bSide || cSide == bSide != aSide) {
        type = "isósceles";
        response.innerHTML = `O seu triângulo é do tipo ${type} `

    } else if (aSide == bSide && aSide == cSide) {
        type = "equilátero"
        response.innerHTML = `O seu triângulo é do tipo  ${type} `

    } else if (aSide != bSide || aSide != cSide) {
        type = "escaleno"
        response.innerHTML = `O seu triangulo e do tipo ${type}`
    }
}

btnEnviar.addEventListener('click', typeOfTriangle)