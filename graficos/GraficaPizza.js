import { pegarCss } from "./comum.js";

async function criarGraficoPizza() {
    const url = "https://raw.githubusercontent.com/GabzinhoHD/Banco-de-dados-EX/refs/heads/main/dadosbarra.json";
    const res = await fetch(url);
    const dados = await res.json();
    const bebidas = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            labels: bebidas,
            values: votos,
            type: 'pie',
            textinfo: "label + percent"
        }
    ];

    const layout = {
        plot_bgcolor: pegarCss('--azul-escuro'),
        paper_bgcolor: pegarCss('--laranja'),
        width: 600,
        height: 400
        
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

criarGraficoPizza();