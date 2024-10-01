const url = 'https://raw.githubusercontent.com/GabzinhoHD/Banco-de-dados-EX/refs/heads/main/entrevista.json'

async function visualizarInfos() {
    const res = await fetch(url)
    const dados = await res.json()
    const SalgadosMais = dados[0].salgado
    const NumeroVotos = dados[0].votos
    const comentarios = dados[0].comentario
    console.log(dados[0].comentario)

    const paragrafo = document.createElement("p")
    paragrafo.classList.add("caixa-grafico__texto")
    paragrafo.innerHTML = `Essa pesquisa, buscou fazer um levantamento dos salgados mais consumidos nas cantinas das escola pelo mundo. Com o auxilio da inteligencia artificial, foi possivel concluir que o salgado <span>${SalgadosMais}</span> ficou em primeiro lugar, com aproximadamente <span>${NumeroVotos}</span> votos, o principal comentario arespeito do salgado foi: <span>${comentarios}</span>`
    const caixa = document.getElementById("caixa-grafico")
    caixa.appendChild(paragrafo)
}

visualizarInfos()
