function descuentazo(n1) {
    let resultado = n1 * 0.8
    let total = n1 - resultado
    alert("Excelente elección! En vez de pagar $" + n1 + " " + "Ahora solo deberá la cómoda cantidad de: $" + total)
}

let jeans = 500
let remera = 300
let licuadora = 700
let lasEsferas = 4000
let tuHermana = "Tu hermana va de regalo XD"

alert("Bienvenido a Tiendas Pirulo! Donde tenemos la talla exacta para tu c...")
alert("Hoy es día de DESCUENTAZOS!!! Y por ser el cliente número 81 en menos de 3 minutos usted ha ganado el DESCUENTAZO del 80%")

let num1;

do {
    num1 = parseFloat(prompt("Por favor, elija una opción siendo 1: los jeans, 2: la remera, 3: la licuadora, 4: las esferas del dragón y 5: tu hermana!"));
    
    if (isNaN(num1) || num1 > 5 || num1 <= 0) {
        alert("Que te daban petróleo en la mamadera? Elija del 1 al 5 el que desee.");
    }
} while (isNaN(num1) || num1 > 5 || num1 <= 0);

if (num1 == 1) {
    descuentazo(jeans)
} else if (num1 == 2) {
    descuentazo(remera)
} else if (num1 == 3) {
    descuentazo(licuadora)
} else if (num1 == 4) {
    descuentazo(lasEsferas)
} else if (num1 == 5) {
    alert(tuHermana)
}