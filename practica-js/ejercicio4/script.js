//le pido al usuario que ingrese un num para calcularle el factorial
//parseInt es para convertirlo a entero ya que prompt devuelve texto
const num = parseInt(prompt("Ingrese un número entero para calcular su factorial"));

//inicializo factorial en 1
let factorial = 1;

//calculo factorial
for(let i = 1; i <= num; i++){
    factorial *= i;
}

alert(`El factorial de ${num} es ${factorial}`);