
let precoProduto = parseFloat(prompt("Digite o preço integral do produto"))
let taxa = parseFloat(prompt("Digite a porcentagem de acrescimo por dia excedido após a data limite da prestação"))
let diasExcedidos = parseInt(prompt("Digite o total de dias se passaram após a data ser excedida"))

let prestacao = precoProduto + (precoProduto / 100 * taxa) * diasExcedidos
prestacao = prestacao.toFixed(2)

alert(`O total da prestação ficaria ${prestacao} R$`)
