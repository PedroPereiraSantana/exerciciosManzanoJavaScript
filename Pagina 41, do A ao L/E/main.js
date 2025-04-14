
let a = parseFloat(prompt("Digite o valor de A"))

if(a != 0) {

    let b = parseFloat(prompt("Digite o valor de B"))
    let c = parseFloat(prompt("Digite o valor de C"))

    let delta = b * b - 4 * a * c
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)

    alert(`X1 = ${x1}`)
    alert(`X2 = ${x2}`)

} else {
    alert("O valor de A não pode ser 0")
}
