// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x === y) {
    return x;
  }
  return Math.max(x, y);
}

function mayoriaDeEdad(edad) {
  if (edad >= 18) {
    return "Allowed";
  } else {
    return "Not allowed"
  }
}
  
function conection(status) {
  if (status === 1) {
    return "Online";
  } else if (status === 2) {
    return "Away";
  } else {
    return "Offline";
  }
}

function saludo(idioma) {
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
      break;
    case "mandarin":
      return "Ni Hao!";
      break;
    case "ingles":
      return "Hello!";
      break;
    default:
      return "Hola!";
      break;
  }
}

function colors(color) {
  switch (color) {
    case "blue":
      return "This is blue";
      break;
    case "red":
      return "This is red";
      break;
    case "green":
      return "This is green";
      break;
    case "orange":
      return "This is orange";
      break;
    default: 
      return "Color not found"
      break;
  }
}

function esDiezOCinco(numero) {
  if (numero === 5 || numero === 10) {
    return true;
  } else {
    return false;
  }
}

function estaEnRango(numero) {
  if (numero < 50 && numero > 20) {
    return true;
  } else {
    return false;
  }
}

function esEntero(numero) {
	if (numero - Math.floor(numero) === 0) {
    return true;
  }
  return false;
}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz"
  } else if (numero % 3 === 0) {
    return "fizz";
  } else if (numero % 5 === 0) {
    return "buzz";
  }
  
  return numero;
}

function operadoresLogicos(num1, num2, num3) {
  const array = [num1, num2, num3];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) return "Hay negativos";
    if (array[i] === 0) return "Error";
  }

  if (num1 > num2 && num1 > num3 && num1 !== 0) return "Número 1 es mayor y positivo";

  if (num3 > num1 && num3 > num2) return num3 + 1;

  return false;
}

function esPrimo(numero) {
  if (numero === 2) return true;
  if (numero === 0 || numero === 1) return false;
  
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
	
  return true;
}

function esVerdadero(valor){
  if (valor) return "Soy verdadero"; else return "Soy falso";

}

function tablaDelSeis(){
  let tabla = []
  
  for (let i = 0; i < 11; i++) {
    tabla.push(6 * i);
  } 
  
  return tabla;
}

function tieneTresDigitos(numero){
  if (numero.toString().length === 3) return true; else return false;
  
}

function doWhile(numero) {
  
  let i = 0;

  do {
    numero += 5;
    i++;
  } while (i !== 8);

  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
