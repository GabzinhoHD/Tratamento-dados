function pegarCss(variavel){
    return getComputedStyle(document.body).getPropertyValue(variavel)
}
 const configuraEixo = {
    color: pegarCss("--azul-escuro"),
    size: 15,
    family: pegarCss("--azul-escuro")
 }
export{pegarCss, configuraEixo}