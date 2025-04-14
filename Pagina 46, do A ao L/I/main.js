
let contador = 1
let soma = 0

while (contador < 11) {
    let nota = parseFloat(prompt("Digite a nota " + contador))

    soma += nota
    contador ++

}

let media = soma / 10
console.log(`A media ficou ${media}`)
