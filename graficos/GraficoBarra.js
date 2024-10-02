async function criargraficoBarra() {
    const url = "https://raw.githubusercontent.com/GabzinhoHD/Banco-de-dados-EX/refs/heads/main/dadosbarra.json"
    const res = await fetch(url)
    const dados = await res.json()
    const salgados = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            x: salgados,
            y: votos,
            type: "bar"
        }
    ]
    const grafico = document.createElement("div")
    grafico.className = "grafico"
    document.getElementById("caixa-grafico").appendChild(grafico)
    Plotly.newPlot(grafico, data)
 }

 criargraficoBarra()