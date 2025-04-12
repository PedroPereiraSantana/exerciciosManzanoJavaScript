
let velociadeKMh = parseFloat(prompt("Digite quantos kilometros por hora o seu veiculo está andando"))
let tempoTrageto = parseInt(prompt("Digite quanto tempo leva a viagem"))

kilometrosTotal = velociadeKMh * tempoTrageto
litrosUsados = kilometrosTotal / 12

litrosUsados = litrosUsados.toFixed(2)

alert(`O total de litros de combustivel consumidos durante o trageto foram ${litrosUsados} L`)

