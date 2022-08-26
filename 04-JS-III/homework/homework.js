// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
}


function devolverUltimoElemento(array) {
  return array[(array.length - 1)];
}


function obtenerLargoDelArray(array) {
  return array.length;
}


function incrementarPorUno(array) {
  for (let i = 0; i < array.length; i++) {
    array[i]++;
  }

  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
	let cadena = "";
  
  for (let i = 0; i < palabras.length; i++) {
    if (palabras.length > 1) {
      cadena += palabras[i] + " ";
    } else {
      cadena += palabras[i];
    }
  }

  if (palabras.length > 1) {
    return cadena.substring(0, cadena.length - 1);
  } else {
    return cadena;
  }
}


function arrayContiene(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) return true;
  }

  return false;
}


function agregarNumeros(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma;
}


function promedioResultadosTest(resultadosTest) {
  let suma = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }

  return suma / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  return Math.max(...numeros);
}


function multiplicarArgumentos() {
  let product = arguments[0];
  
  if (arguments[0] === undefined) {
    return 0;
  }
  
  for (let i = 1; i < arguments.length; i++) {
    product *= arguments[i];
  }
  
  return product;
}


function cuentoElementos(arreglo){
  let result = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) result++;
  }

  return result;
}


function diaDeLaSemana(numeroDeDia) {
  if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana"; else return "Es dia Laboral";
  
} 


function empiezaConNueve(n) {
  let array = String(n).split("");
  
  if (array[0] == 9) return true; else return false;
  
}


function todosIguales(arreglo) {
  const baseNumber = arreglo[0];
  let value = false;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === baseNumber) value = true; else value = false;
  } 
  
  return value;
} 


function mesesDelAño(array) {
  let mesesPedidos = [];

    for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      mesesPedidos.push(array[i]);
    }
  }
  
  if (mesesPedidos.includes("Marzo") && mesesPedidos.includes("Enero") && mesesPedidos.includes("Noviembre")) {
    return mesesPedidos;
  } else {
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) newArray.push(array[i]);
  }
  
  return newArray;
}


function breakStatement(numero) {
  let array = [];
  let sum = numero;
  let value = false;

  for (let i = 0; i < 10; i++) {
    sum += 2;
    if (sum === i) {
      value = false;
      break;
    } else {
      array.push(sum);
      value = true;
    }
  }
  
  if (value === true) {
    return array;
  }  else {
    return "Se interrumpió la ejecución"
  }
}


function continueStatement(numero) {
  let array = [];
  let num = numero;

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    } else {
      num += 2;
      array.push(num);
    }
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
