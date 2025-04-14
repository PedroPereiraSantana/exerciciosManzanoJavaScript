
let nome = prompt("Digite o seu nome, por gentileza")
let sexo = prompt("Digite o seu sexo, se não for pedir muito (feminino / masculino)")

let pronome

if(sexo == "feminino") {
    pronome = "Sra."
} else {
    pronome = "Sr."
}

alert(`Olá, ${pronome} ${nome}`)
