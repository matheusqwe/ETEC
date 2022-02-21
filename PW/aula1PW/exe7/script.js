const password = String(document.querySelector(".inputPassword").value)

document.querySelector(".btnEnviar").addEventListener('click', () => {
    try {
        let userAluno = (document.querySelector(".inputAluno").checked == true) ? true : false;
        let userProfessor = (document.querySelector(".inputProfessor").checked == true) ? true : false;

        if (userAluno == true && userProfessor == true) throw alert("Erro, dois valores marcados")
        if (userAluno == false && userProfessor == false) throw alert("Erro, nenhum valor marcados")

        if (userProfessor == true) {
            window.location.href = "./pageForProfessor.html"
        }
        else if (userAluno == true) {
            window.location.href = "./pageForAluno.html"
        }
    } catch (error) {
        alert(error)
    }
})
