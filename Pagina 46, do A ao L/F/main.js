
let b = parseInt(prompt("Digite o valor da base da exponenciação"))
let e = parseInt(prompt("Digite o expoente"))

produto = 0
contador = 1

produto = b
while(contador < e) {
    produto = produto * b
    contador ++
}

console.log(produto)

