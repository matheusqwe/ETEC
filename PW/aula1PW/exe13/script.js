{
    var nums = []
    var nums_entre_cem_duzentos = []

    for (let i = 0; i < 10; i++) {
        nums[i] = prompt("Escreva um numero")

        if (isNaN(nums[i]) == true) {
            throw alert("digite apenas numeros")
            break;
        }
        else {
            continue;
            nums[Number(i)]
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 99 && nums[i] < 201) {
            nums_entre_cem_duzentos[i] = nums[i]
        }
    }


    nums_entre_cem_duzentos.filter(function (i){
        return i != "" && i!= undefined  && i!= null; 
    })
    ;

    alert(`OS numeros entre 100 e 200 digitado sao : ${nums_entre_cem_duzentos}`)
    document.write(nums)
}