
let base = 3
let expoente = 15
let resultado = 0
let cont = 0

for (let i = 0; i < 15; i++){
    if (i = 0){
        resultado = 1
 
    } else if (i = 1) {
        resultado = base
        console.log(resultado)
    } else {
        for (cont; cont < 15; cont++){
            resultado = base
            resultado = resultado * expoente
        }
        console.log(resultado)
    }
    cont++
    console.log(resultado)
}
