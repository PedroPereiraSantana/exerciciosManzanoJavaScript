
let valor1 = parseInt(prompt("Digite o primeiro valor"))
let valor2 = parseInt(prompt("Digite o segundo valor"))
let valor3 = parseInt(prompt("Digite o terceiro valor"))
let valor4 = parseInt(prompt("Digite o quarto valor"))

switch (true) {
    case valor1 % 2 == 0:
        alert("O primeiro valor é divisivel por dois")

    case valor1 % 3 == 0:
        alert("O primeiro valor é divisivel por três")

    case valor2 % 2 == 0:
        alert("O segundo valor é divisivel por dois")

    case valor2 % 3 == 0:
        alert("O segundo valor é divisicel por três")

    case valor3 % 2 == 0:
        alert("O terceiro valor é divisivel por dois")

    case valor3 % 3 == 0:
        alert("O terceiro valor é divisivel por três")

    case valor4 % 2 ==0:
        alert("O quarto valor é divisivel por dois")

    case valor4 % 3 == 0:
        alert("O quarto valor é divisivel por três")

    default:
        break
        
}   
