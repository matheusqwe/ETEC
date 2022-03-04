var body = document.body
// a propriedade onload de window, permite executarmos uma funtion ao carregar a pagina
window.onload =    setTimeout(escrevaAlgo, 1000);

    //setTimeout e um metodo que executa uma function em intervalo 

function escrevaAlgo() {
    alert("testando coisas ")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelector("#contagem").addEventListener('click', () => {
    setInterval(() => {
        let h1 = document.createElement('h1')
        let txtForH1 = document.createTextNode("texto")
        h1.appendChild(txtForH1);
        body.appendChild(h1)

    }, 4000)
})


