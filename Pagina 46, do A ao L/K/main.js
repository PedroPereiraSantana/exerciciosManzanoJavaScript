
let resposta = "sim"
let areaTotal = 0

while (resposta == "sim") {
    let nome = prompt("Digite o nome do cômodo")
    let largura = parseFloat(prompt("Digite a largura do cômodo"))
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo"))

    let area = largura * comprimento
    areaTotal = areaTotal + area

    console.log(`o cômodo ${nome} tem como área total ${area} M²`)

    resposta = prompt("deseja continuar? (sim / não)")
}

console.log(`A área total da casa é de ${areaTotal} M²`)
