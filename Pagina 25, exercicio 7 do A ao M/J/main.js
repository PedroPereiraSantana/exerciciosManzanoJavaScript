
let dolar = parseFloat(prompt("Digite o valor em dolares"))
let dolarParaReal = parseFloat(prompt("Digite a cotação do dolar atualmente"))

let conversaoParaReal = dolar * dolarParaReal
conversaoParaReal = conversaoParaReal.toFixed(2)


alert("O valor convertido para reais seria "+ conversaoParaReal + " R$")
