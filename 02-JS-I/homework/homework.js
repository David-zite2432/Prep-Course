// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola mundo esto es un string";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 54;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
 return str;
  
}

function suma(x, y) {
  const resultadoSum = x + y;
  return resultadoSum;
  
}

function resta(x, y) {
  const resultadoRest = x - y;
  return resultadoRest;
  
}

function multiplica(x, y) {
  const resultadoMult = x * y;
  return resultadoMult;
  
}

function divide(x, y) {
  const resultadoDiv = x / y;
  return resultadoDiv;
  
}

function sonIguales(x, y) {
  if(x === y) {
    return true;
    
  } else {
    return false;

  }
  
}

function tienenMismaLongitud(str1, str2) {
  if(str1.length === str2.length) {
    return true;
    
  } else {
    return false;

  }
  
}

function menosQueNoventa(num) {
  if(num < 90) {
    return true;

  } else {
    return false;

  }
  
}

function mayorQueCincuenta(num) {
  if(num > 50) {
    return true;

  } else {
    return false;

  }
  
}

function obtenerResto(x, y) {
  const resultadoResto = x % y;
  return resultadoResto;
  
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;
    
  } else {
    return false;
    
  }
  
}

function esImpar(num) {
  if (num % 2 !== 0) {
    return true;
    
  } else {
    return false;
    
  }
  
}

function elevarAlCuadrado(num) {
  const resultadoCua = Math.pow(num, 2);
  return resultadoCua;
  
}

function elevarAlCubo(num) {
  const resultadoCub = Math.pow(num, 3);
  return resultadoCub;
  
}

function elevar(num, exponent) {
  const resultadoExp = Math.pow(num, exponent);
  return resultadoExp;
  
}

function redondearNumero(num) {
  const resultadoRedon = Math.round(num);
  return resultadoRedon;
  
}

function redondearHaciaArriba(num) {
  const resultadoRedon = Math.ceil(num);
  return resultadoRedon;
  
}

function numeroRandom() {
  const resultadoSqrt = Math.random();
  return resultadoSqrt;
  
}

function esPositivo(numero) {
  if(numero > 0) {
    return "Es positivo";

  } else if(numero < 0) {
    return "Es negativo";

  } else {
    return false;

  }

}

function agregarSimboloExclamacion(str) {
  const newString = str + "!";
  return newString;

}

function combinarNombres(nombre, apellido) {
  const fullName = nombre + " " + apellido;
  return fullName;
  
}

function obtenerSaludo(nombre) {
  const saludo = "Hola " + nombre + "!";
  return saludo;
  
}

function obtenerAreaRectangulo(alto, ancho) {
  const resultadoArea = alto * ancho;
  return resultadoArea;
  
}


function retornarPerimetro(lado){
  const resultadoPeri = 4 * lado;
  return resultadoPeri;
  
}


function areaDelTriangulo(base, altura){
  const resultadoArea = base * altura / 2;
  return resultadoArea;

}


function deEuroAdolar(euro){
  const cambio = euro * 1.20;
  return cambio;
  
}


function esVocal(letra){
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    return "Es vocal";

  } else if(letra.length > 1) {
    return "Dato incorrecto";

  } else {
    return "Dato incorrecto";

  }
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
