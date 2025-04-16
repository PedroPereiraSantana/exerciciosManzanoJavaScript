
let valores = []
let numero = 0

do {
    numero = parseInt(prompt("Digite um número"))
    if(numero >= 0) {
        valores.push(numero)
    } else {
        break
    }
} while (true)

valores.sort()

console.log(`O menor número digitado foi ${valores[0]}`)
console.log(`O maior número digitado foi ${valores[valores.length -1]}`)
