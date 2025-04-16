
let contador = 3
let divisor = 2
let num = 2

do {
    if (contador % 2 !== 0) {
        do {
            num = 2
            if (contador % divisor == 0) {
                num = contador / divisor
                console.log(divisor)
            }else{
                divisor += 1
            }
        } while(num > 1)
    }
    contador ++
} while(contador < 11)

