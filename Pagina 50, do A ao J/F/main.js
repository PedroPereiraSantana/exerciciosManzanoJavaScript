
let num = parseInt(prompt("Digite o primeiro número"))
let soma = 0
let contador = 0


do {
    soma = soma + num
    contador++
    // console.log(soma)
    // console.log(contador)
    // console.log(num)
    num = parseInt(prompt("Digite mais um número"))
} while (num > -1)


let media = soma / contador
console.log(`No final foram somado um total de ${contador} números e a média final ficou ${media.toFixed(2)}`)
