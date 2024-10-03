import { pegarCss } from "./comum.js";

async function criarGraficoPizza() {
    
    const url = 'https://raw.githubusercontent.com/SNOWFORSE/json/refs/heads/main/grafico.json';
    const res = await fetch(url);
    const dados = await res.json();
    const salgados = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            keys: salgados,
            values: votos,
            type: 'pie',
            textinfo: "label + percent"
        }
    ];

    const layout = {
        plot_bgcolor: pegarCss('--laranja'),
        paper_bgcolor: pegarCss('--sage'),
        height: 400,
        width: 600
        
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

criarGraficoPizza();