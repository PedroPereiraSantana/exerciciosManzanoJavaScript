let altura = parseFloat(prompt("Digite a altura do latão"))
let raio = parseFloat(prompt("Digite o valor do raio"))

let areaTotal = (Math.PI * (raio * raio)) * altura

alert(`A área do galão é ${areaTotal.toFixed(2)}`)
