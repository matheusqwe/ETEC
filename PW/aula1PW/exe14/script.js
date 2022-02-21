document.querySelector(".btnDescobrir").addEventListener('click', descobrir)

function descobrir() {
    let chico = { nome: "chico", altura: 150 }
    let juca = { nome: "juca", altura: 110 }
    let qtd = 1;

    for (let i = 0; juca.altura <= chico.altura; i++) {
        chico.altura = chico.altura + 1;
        juca.altura = juca.altura + 3;
        qtd++;
    }
    
    alert(qtd + " anos")
    alert("chico vai ter " + chico.altura + " cm")
    alert("juca vai ter " + juca.altura + " cm")
}