
let contador = 0
let divisor = 2
let numero = 0
let soma = 0

do {
    numero = parseInt(prompt("Digite um valor para se fatorado"))

    divisor = 2
    do{
        if(numero % divisor == 0) {
            numero = numero / divisor
            soma = soma + divisor
            // console.log(`Número ${numero}`)
            // console.log(`Divisor ${divisor}`)
            // console.log(`Soma ${soma}`)
        } else {
            divisor = divisor + 1
        }
    } while (numero > 1)
    
    contador ++
}while(contador < 15)

console.log("A soma final tem como resultado "+soma)
