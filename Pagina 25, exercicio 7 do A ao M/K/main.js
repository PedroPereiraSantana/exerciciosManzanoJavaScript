
let real = parseFloat(prompt("Digite o valor em reais"))
let realParaDolar = parseFloat(prompt("Digite a cotação do dolar atualmente"))

let conversaoParaDolar = real / realParaDolar
conversaoParaDolar = conversaoParaDolar.toFixed(2)


alert("O valor convertido para reais seria "+ conversaoParaDolar + " U$")
