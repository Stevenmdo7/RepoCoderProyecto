function descuentazo(n1) {
    let resultado = n1 * 0.8
    let total = n1 - resultado
    alert("Excelente elección! En vez de pagar $" + n1 + " " + "Ahora solo deberá abonar la cómoda cantidad de: $" + total+"\nMuchas gracias por su compra!")
}
function premium(n1, n2, n3, n4, n5) {
    let prem = n1 + n2 + n3 + n4 + n5
    let total = prem - (prem*0.8)
    alert("Excelente elección!\nEn vez de pagar $" + prem+ "\nAhora solo deberá abonar la cómoda cantidad de: $" + total+"\n"+souvenir+"\nMuchas gracias por su compra!")
}

let dinamo = 500
let radiador = 300
let juntas = 700
let motor = 4000
let revision = 900
let souvenir = "ADEMAS!!! Por haber elegido la categoria premium usted se ha ganado 2 entradas dobles con pase a camerino al concierto de Judas Priest"
let num1

alert("Bienvenido a Tiendas Dinamo!\nDonde tenemos la talla exacta para tu motor!")
alert("Hoy es día de DESCUENTAZOS!!!\nY por ser el cliente número 81 en menos de 3 minutos usted ha ganado el DESCUENTAZO del 80%")

do {
    num1 = parseFloat(prompt("Por favor, elija una opción siendo:\n1: Dinamo\n2: Radiador\n3: juntas\n4: Motor\n5: Revision total del vehiculo\n6:Aumentar a Membresia premium"));
    
    if (isNaN(num1) || num1 > 6 || num1 <= 0) {
        alert("Que te daban petróleo en la mamadera?\nElija del 1 al 6 el que desee.")
    }
} while (isNaN(num1) || num1 > 6 || num1 <= 0)

if (num1 == 1) {
    descuentazo(dinamo)
} else if (num1 == 2) {
    descuentazo(radiador)
} else if (num1 == 3) {
    descuentazo(juntas)
} else if (num1 == 4) {
    descuentazo(motor)
} else if (num1 == 5) {
    descuentazo(revision)
} else if (num1 == 6) {
    premium(dinamo, radiador, juntas, motor, revision)
}