
let expoente = parseInt(prompt("Digite um numero de 0 a 15"))

let resultado = 0
let contador = 1

if (expoente == 0) {
    resultado = 1
} else if (expoente == 1) {
    resultado = 3
} else {
    resultado = 3
    while (contador < expoente) {
        resultado = resultado * 3
        contador ++
    }
    
}

console.log(resultado)
