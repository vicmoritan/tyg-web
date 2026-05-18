var valores = [true, 5, false, "hola", "adios", 2];

//inciso a), comparar cadenas de caracteres para ver cuál es más larga
const hola = valores[3];
const adios = valores[4];

if (hola.length > adios.length){
   alert(`${hola} es más largo que ${adios}`);
}

else {
    alert(`${adios} es más largo que ${hola}`);
}

//inciso b), determinar operadores para obtener resultado true y false con los booleanos
const valorTrue = valores[0];
const valorFalse = valores[2];

//resultado true
const resultadoTrue = valorTrue || valorFalse
alert(resultadoTrue);

//resultado false
const resultadoFalse = valorTrue && valorFalse
alert(resultadoFalse);

//inciso c), determinar resultado de cinco operaciones matemáticas con los valores numéricos
const num1 = valores[1];
const num2 = valores[5];

//suma
const suma = num1 + num2;
alert(`Suma: ${suma}`);

//resta
const resta = num1 - num2;
alert(`Resta: ${resta}`);

//multiplicación
const multiplicacion = num1 * num2;
alert(`Multiplicación: ${multiplicacion}`);

//división
const division = num1 / num2;
alert(`División: ${division}`);

//modulo (resto de la división)
const modulo = num1 % num2
alert(`Módulo: ${modulo}`);