
let valor1 = parseInt(prompt("Digite o primeiro valor"))
let valor2 = parseInt(prompt("Digite o segundo valor"))

let diferencaEntreValores

if(valor1 > valor2) {
    diferencaEntreValores = valor1 - valor2
} else {
    diferencaEntreValores = valor2 - valor1
}

alert(`A diferença entre os valores é de ${diferencaEntreValores}`)
