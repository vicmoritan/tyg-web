//función que devuelve info sobre una cadena de texto (si está en mayúsculas, minúsculas o ambas)
function infoCadena(cadena){
    //formato de resultado con concatenación, \" es para poner comillas dobles
    resultado = "La cadena \"" + cadena + "\"";

    //si está en mayúsculas
    if (cadena == cadena.toUpperCase()){
        resultado += "está en mayúsculas";
    }

    //si está en minúsculas
    else if (cadena == cadena.toLowerCase()){
        resultado += "está en minúsculas";
    }

    //si es combinación de ambas
    else {
        resultado += "es una combinación de mayúsculas y minúsculas";
    }

    return resultado;
}

//pedir al usuario el ingreso de cadena de texto
cadenaIngresada = prompt("Ingrese una cadena de texto");

//llamada a la función infoCadena con la cadena ingresada por el usuario como argumento
alert(infoCadena(cadenaIngresada));