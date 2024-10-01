async function criargraficoBarra() {
    const url = "https://raw.githubusercontent.com/GabzinhoHD/Banco-de-dados-EX/refs/heads/main/entrevista.json"
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
 }

 criargraficoBarra()