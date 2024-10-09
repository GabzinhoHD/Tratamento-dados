import { configuraEixo, pegarCss } from "./comum.js"
async function criargraficoBarra() {
    const url = "https://raw.githubusercontent.com/GabzinhoHD/Banco-de-dados-EX/refs/heads/main/dadosbarra.json"
    const res = await fetch(url)
    const dados = await res.json()
    const bebidas = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            x: bebidas,
            y: votos,
            type: "bar",
            marker: {
                color: pegarCss("--azul-escuro"),
            }
        }
    ]
    const layout = {
        plot_bgcolor: pegarCss("--azul-claro"),
        paper_bgcolor: pegarCss("--laranja"),
        width: 1000,
        height: 600,
        title:{
            text: "Os salgados mais consumidos",
            font:{
                color: pegarCss("--azul-escuro"),
                family: pegarCss("--fonte-texto"),
                size: 50
            }
        },
        xaxis:{
            tickfont: configuraEixo,
            tickangle: 24,
        },
        yaxis: {
            tickfont: configuraEixo
        }
    }
    const grafico = document.createElement("div")
    grafico.className = "grafico"
    document.getElementById("caixa-grafico").appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
 }

 criargraficoBarra()