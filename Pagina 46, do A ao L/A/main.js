
let num = parseInt(prompt("Digite o valor"))

let contador = 1

while (contador < 11) {
    let produto = contador * num
    console.log(`${num} X ${contador} = ${produto}`)
    contador ++
}
