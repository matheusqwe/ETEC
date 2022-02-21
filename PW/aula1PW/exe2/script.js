var btnEvent = document.querySelector(".btnEnviar")


function verificaNum() {
    var txtNum = Number(document.querySelector(".txtNum").value);
    var resAll = document.querySelector(".respostaAll")
    
 
    var option = []

    option[0] = (txtNum % 2 == 0 && txtNum % 5 == 0 && txtNum % 10 == 0) ? option[0] = `O numero e divisivel por 10, 5  e 2` : option[0] = false;
    option[1] = (txtNum % 10 == 0) ? option[1]= `O numero ${txtNum} e divisivel por 10` : option[1] = false;
    option[2] = (txtNum % 5 == 0) ? option[2]= ` o Numero ${txtNum} e divisivel por 5` : option[2]= false;
    option[3] = (txtNum % 2 == 0) ? option[3] = `O numero ${txtNum} e divisivel por 2` : option[3]= false;
    option[4 ] = (txtNum %2 != 0 && txtNum %5 != 0  && txtNum % 10 != 0)?  option[4] = `o numero ${txtNum} nao e divisivel por 10, 5 ou 2` : option[4] =false;

    for (let i = 0; i<option.length; i++){
        if(option[i] != false){
            resAll.innerHTML = option[i]

        }
    }
}