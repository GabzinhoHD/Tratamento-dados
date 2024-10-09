import { pegarCss } from "./comum.js"

async function criargraficoTurma() {
    const url = "https://raw.githubusercontent.com/GabzinhoHD/Banco-de-dados-EX/refs/heads/main/Tancredo.json"
    const res = await fetch(url)
    const dados = await res.json()
    const turma = dados.slice(1).map( Turmas => Turmas[1] )
    const Contagem = turma.reduce((acc, turma ) => {
        acc[turma] = (acc[turma] || 0) + 1 
        return acc
    },{})
    const valores = Object.values(Contagem)
    const etiqueta = Object.keys(Contagem)
    const data = [
        {
            values: valores,
            labels: etiqueta,
            type:"pie",
            textinfo: "label + percent",
        }
    ]
    const layout = {
        plot_bgcolor: pegarCss('--azul-escuro'),
        paper_bgcolor: pegarCss('--laranja'),
        font:{
            color: pegarCss("--azul-escuro"),
            family: pegarCss("--fonte-texto"),
            size: 15
        }
    }

    const pesquisaTitulo = document.createElement("h3")
    pesquisaTitulo.classList.add("caixa-grafico__texto")
    pesquisaTitulo.innerHTML = `As turmas do colegio <span>Tancredo</span> que votaram`
    const grafico = document.createElement("div")
    grafico.className = "grafico"
    document.getElementById("caixa-grafico").appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displayModeBar: false
    }
    Plotly.newPlot(grafico, data, layout, config)
}

criargraficoTurma()