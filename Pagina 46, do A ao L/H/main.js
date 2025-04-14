
let contador = 0
let celsius = 10
let fahrenheit = 0

while (contador < 10) {

    fahrenheit = (9 * celsius + 160) / 5
    
    console.log(`a temperatura em celsius é ${celsius}° e convertido para fahrenheit fica ${fahrenheit}°`)

    contador ++
    celsius += 10

}
