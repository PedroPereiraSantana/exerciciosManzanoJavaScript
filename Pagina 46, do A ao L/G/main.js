
let contador = 0
let anterior = 0
let atual = 1
console.log(atual)
while (contador < 16) {
    console.log(atual)

    anterior = atual - anterior
    atual = atual + anterior

    contador ++
}
