
let numero = parseInt(prompt("Escreva o número que deseja"))
let produto

for(let contador = 1; contador < 11; contador++) {
    produto = numero * contador
    console.log(`${numero} X ${contador} = ${produto}`)
}
