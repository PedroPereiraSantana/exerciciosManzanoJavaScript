let nomeDoComodo = ""
let respota = ""
let soma = 0
let area = 0
let largura = 0
let comprimento = 0


do {
    nomeDoComodo = prompt("Digite o nome do cômodo")
    largura = parseFloat(prompt("Digite a largura do cômodo"))
    comprimento = parseFloat(prompt("Digite o comprimento do cômodo"))

    area = largura * comprimento
    soma += area
    console.log(`A área do cômodo ${nomeDoComodo} é ${area} M²`)
    
    respota = prompt("Deseja digitar as informações de outro cômodo? (sim / não)")
} while(respota == "sim")

console.log("A área total da casa é "+  soma + " M²")
