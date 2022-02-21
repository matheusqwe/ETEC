var btnEnviar = document.querySelector(".btnEnviar")

function validar() {
    try {
        
        let isMan = (document.querySelector('.sexMasculino').checked == true) ? true : false;
        let isWoman = (document.querySelector('.sexFemino').checked == true) ? true : false;
        let txtIdade = document.querySelector('.idade')
        let notEr = /[a-z]/i;
        
        if (txtIdade.value.match(notEr)) throw alert("So sao permitidos numeros")
        let idade = Number(txtIdade.value)
        

        if (isMan == true && isWoman == true | isMan == false || isWoman == false) throw alert("Erro, voce precisa marcar apenas uma opcao")
        if(idade)

        if (isWoman ==true  && idade >= 25) {
            alert("acesso permitido")
        } else {
            alert("erro, acesso nao liberado")
        }

    } catch (error) {
        alert(error)
    }
}
btnEnviar.addEventListener("click", validar)