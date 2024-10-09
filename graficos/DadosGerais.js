
async function visualizarInfos() {
    const url = 'https://raw.githubusercontent.com/GabzinhoHD/Banco-de-dados-EX/refs/heads/main/entrevista.json'
    const res = await fetch(url)
    const dados = await res.json()
    const BebidaMais = dados[0].bebida
    const NumeroVotos = dados[0].votos

    const paragrafo = document.createElement("p")
    paragrafo.classList.add("caixa-grafico__texto")
    paragrafo.innerHTML = `Essa pesquisa, buscou fazer um levantamento das bebidas mais consumidos nas cantinas das escola pelo mundo. Com o auxilio da inteligencia artificial, foi possivel concluir que a bebida <span>${BebidaMais}</span> ficou em primeiro lugar, com aproximadamente <span>${NumeroVotos}</span> votos.`
    const caixa = document.getElementById("caixa-grafico")
    caixa.appendChild(paragrafo)
}

visualizarInfos()
