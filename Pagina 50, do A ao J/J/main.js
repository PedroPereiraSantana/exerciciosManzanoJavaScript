
let dividendo = parseInt(prompt("Digite o dividendo"))
let dividendoAnterior = dividendo
let divisor = parseInt(prompt("Digite o divisor"))
let quociente = 0

do {
    dividendo = dividendo - divisor
    quociente++

} while(dividendo > divisor)

console.log(`O total de vezes que o número ${dividendoAnterior} pode ser dividido pelo ${divisor} é um total de ${quociente} vezes`)
