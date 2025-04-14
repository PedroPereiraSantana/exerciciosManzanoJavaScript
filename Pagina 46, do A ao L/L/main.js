
let valor = parseInt(prompt("Digite um valor"))
let lista = [valor]
let contador = 0

while (true) {
    valor = parseInt(prompt("Digite um valor"))

    if (valor < 0) {
        break

    } 
    contador ++
    lista.push(valor)

}

lista.sort((a, b) => a - b)
console.log(lista[0])
console.log(lista[lista.length -1])
