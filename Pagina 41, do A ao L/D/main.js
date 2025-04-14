
let nota1 = parseFloat(prompt("Digite a primeira nota"))
let nota2 = parseFloat(prompt("Digite a segunda nota"))
let nota3 = parseFloat(prompt("Digite a terceira nota"))
let nota4 = parseFloat(prompt("Digite a quarta nota"))

let media = (nota1 + nota2 + nota3 + nota4) / 4
let notaExame

if (media >= 7) {
    alert("esse aluno foi aprovado, cuja media foi " + media)
} else {
    notaExame = parseFloat(prompt("Digite a nota do exame"))

    if(notaExame >= 5 ) {
        alert(`esse aluno foi aprovado pelo exame, tendo como media ${media} e a nota do exame sendo ${notaExame}`)
    } else {
        alert(`O aluno não foi aprovado, sua media foi ${media} e a nota do seu exame foi ${notaExame}`)
    }
}

