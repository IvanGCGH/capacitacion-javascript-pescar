// ==========================================
// 1. VARIABLES Y TIPOS DE DATOS
// ==========================================

console.log("\n--- 1. Variables ---");

// let: puede cambiar
let edad = 25;
console.log("Edad inicial:", edad);
edad = 26;
console.log("Edad después de cambiar:", edad);

// const: NO puede cambiar
const nombre = "Ana";
console.log("Nombre:", nombre);
// nombre = "Carlos";  // ❌ Esto daría error

// Tipos de datos
let texto = "Hola mundo"; // string
let numero = 42; // number
let decimal = 3.14; // number
let verdadero = true; // boolean
let falso = false; // boolean
let sinValor; // undefined
let vacio = null; // null

console.log("Tipos:");
console.log(typeof texto); // "string"
console.log(typeof numero); // "number"
console.log(typeof verdadero); // "boolean"
console.log(typeof sinValor); // "undefined"
console.log(typeof vacio); // "object" (bug histórico de JS)

// ==========================================
// 2. TEMPLATE LITERALS
// ==========================================

console.log("\n--- 2. Template Literals ---");

const nombrePersona = "Carlos";
const edadPersona = 30;

// Forma vieja (concatenación)
const mensajeViejo =
  "Hola " + nombrePersona + ", tienes " + edadPersona + " años";
console.log(mensajeViejo);

// Forma moderna (template literals)
const mensajeNuevo = `Hola ${nombrePersona}, tienes ${edadPersona} años`;
console.log(mensajeNuevo);

// Multilinea
const poema = `
    Roses are red,
    Violets are blue,
    JavaScript is awesome,
    And so are you!
`;
console.log(poema);

// Expresiones dentro de template literals
const a = 10;
const b = 20;
console.log(`La suma de ${a} y ${b} es ${a + b}`);

// ==========================================
// 3. OPERADORES
// ==========================================

console.log("\n--- 3. Operadores Aritméticos ---");

let suma = 10 + 5;
let resta = 10 - 5;
let multiplicacion = 10 * 5;
let division = 10 / 5;
let modulo = 10 % 3; // resto
let potencia = 2 ** 3; // 2 elevado a 3

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("Potencia:", potencia);

// Incremento y decremento
let contador = 0;
contador++; // contador = contador + 1
console.log("Contador después de ++:", contador);
contador--; // contador = contador - 1
console.log("Contador después de --:", contador);

console.log("\n--- 4. Operadores de Comparación ---");

// == vs ===
console.log("5 == '5':", 5 == "5"); // true (compara solo valor)
console.log("5 === '5':", 5 === "5"); // false (compara valor Y tipo) ⭐ USAR ESTE

console.log("5 != '5':", 5 != "5"); // false
console.log("5 !== '5':", 5 !== "5"); // true ⭐ USAR ESTE

console.log("10 > 5:", 10 > 5);
console.log("10 < 5:", 10 < 5);
console.log("10 >= 10:", 10 >= 10);
console.log("10 <= 5:", 10 <= 5);

console.log("\n--- 5. Operadores Lógicos ---");

const tieneLicencia = true;
const mayorDeEdad = true;

console.log("Puede conducir (AND):", tieneLicencia && mayorDeEdad); // true
console.log("Puede entrar (OR):", tieneLicencia || mayorDeEdad); // true
console.log("NO tiene licencia:", !tieneLicencia); // false

// ==========================================
// 6. TRUTHY Y FALSY
// ==========================================

console.log("\n--- 6. Truthy y Falsy ---");

// Valores Falsy (se evalúan como false):
// false, 0, "", null, undefined, NaN

if (false) console.log("false es truthy"); // No se ejecuta
if (0) console.log("0 es truthy"); // No se ejecuta
if ("") console.log("string vacío es truthy"); // No se ejecuta
if (null) console.log("null es truthy"); // No se ejecuta
if (undefined) console.log("undefined es truthy"); // No se ejecuta

// Valores Truthy (todo lo demás):
if (true) console.log("✅ true es truthy");
if (1) console.log("✅ 1 es truthy");
if ("Hola") console.log("✅ 'Hola' es truthy");
if ([]) console.log("✅ array vacío es truthy");
if ({}) console.log("✅ objeto vacío es truthy");

// ==========================================
// 7. CONDICIONALES
// ==========================================

console.log("\n--- 7. If/Else ---");

const edadUsuario = 20;

if (edadUsuario >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// If-else if-else
const nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 75) {
  console.log("Muy bien");
} else if (nota >= 60) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// Operador ternario (forma corta)
const resultado = edadUsuario >= 18 ? "Mayor de edad" : "Menor de edad";
console.log("Resultado con ternario:", resultado);

console.log("\n--- 8. Switch ---");

const dia = 3;
let nombreDia;

switch (dia) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  case 6:
  case 7:
    nombreDia = "Fin de semana";
    break;
  default:
    nombreDia = "Día inválido";
}

console.log(`El día ${dia} es ${nombreDia}`);

// ==========================================
// 9. LOOPS (BUCLES)
// ==========================================

console.log("\n--- 9. For Loop ---");

for (let i = 0; i < 5; i++) {
  console.log(`Iteración ${i}`);
}

// For con break
console.log("\nFor con break:");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Sale del loop
  }
  console.log(i);
}

// For con continue
console.log("\nFor con continue (solo pares):");
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue; // Salta a la siguiente iteración
  }
  console.log(i);
}

console.log("\n--- 10. While Loop ---");

let contadorWhile = 0;
while (contadorWhile < 5) {
  console.log(`While: ${contadorWhile}`);
  contadorWhile++;
}

console.log("\n--- 11. Do-While Loop ---");

let contadorDoWhile = 0;
do {
  console.log(`Do-While: ${contadorDoWhile}`);
  contadorDoWhile++;
} while (contadorDoWhile < 5);

// Diferencia: Do-While se ejecuta al menos una vez
let x = 10;
while (x < 5) {
  console.log("While: esto no se imprime");
}

do {
  console.log("Do-While: esto SÍ se imprime una vez");
} while (x < 5);

// ==========================================
// 10. FUNCIONES
// ==========================================

console.log("\n--- 12. Funciones Tradicionales ---");

// Declaración de función
function saludar(nombre) {
  return `Hola ${nombre}!`;
}

console.log(saludar("María"));
console.log(saludar("Pedro"));

// Función con múltiples parámetros
function sumar(a, b) {
  return a + b;
}

console.log("Suma:", sumar(5, 3));

// Función sin return (retorna undefined)
function imprimirMensaje(mensaje) {
  console.log(mensaje);
}

imprimirMensaje("Este es un mensaje");

// Parámetros por defecto
function saludarConDefault(nombre = "Invitado") {
  return `Hola ${nombre}!`;
}

console.log(saludarConDefault()); // "Hola Invitado!"
console.log(saludarConDefault("Ana")); // "Hola Ana!"

console.log("\n--- 13. Arrow Functions ---");

// Arrow function básica
const saludarArrow = (nombre) => {
  return `Hola ${nombre}!`;
};

console.log(saludarArrow("Carlos"));

// Arrow function corta (return implícito)
const saludarCorta = (nombre) => `Hola ${nombre}!`;
console.log(saludarCorta("Laura"));

// Arrow function con múltiples parámetros
const sumarArrow = (a, b) => a + b;
console.log("Suma con arrow:", sumarArrow(10, 20));

// Arrow function sin parámetros
const obtenerFecha = () => new Date();
console.log("Fecha:", obtenerFecha());

console.log("\n--- 14. Scope (Ámbito) ---");

let variableGlobal = "Soy global";

function ejemploScope() {
  let variableLocal = "Soy local";
  console.log("Dentro de la función:");
  console.log("- Acceso a global:", variableGlobal);
  console.log("- Acceso a local:", variableLocal);
}

ejemploScope();

console.log("Fuera de la función:");
console.log("- Acceso a global:", variableGlobal);
// console.log("- Acceso a local:", variableLocal); // Da error

// Block scope con let y const
if (true) {
  let dentroDelBloque = "Solo existo en el if";
  console.log(dentroDelBloque);
}
// console.log(dentroDelBloque); // Da error

// ==========================================
// EJEMPLOS COMBINADOS
// ==========================================

console.log("\n--- EJEMPLO COMBINADO 1: Calculadora ---");

function calculadora(num1, num2, operacion) {
  if (operacion === "sumar") {
    return num1 + num2;
  } else if (operacion === "restar") {
    return num1 - num2;
  } else if (operacion === "multiplicar") {
    return num1 * num2;
  } else if (operacion === "dividir") {
    if (num2 === 0) {
      return "Error: No se puede dividir por cero";
    }
    return num1 / num2;
  } else {
    return "Operación inválida";
  }
}

console.log("10 + 5 =", calculadora(10, 5, "sumar"));
console.log("10 - 5 =", calculadora(10, 5, "restar"));
console.log("10 * 5 =", calculadora(10, 5, "multiplicar"));
console.log("10 / 5 =", calculadora(10, 5, "dividir"));
console.log("10 / 0 =", calculadora(10, 0, "dividir"));

console.log("\n--- EJEMPLO COMBINADO 2: Números pares del 1 al 20 ---");

function obtenerPares(hasta) {
  const pares = [];
  for (let i = 1; i <= hasta; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }
  return pares;
}

console.log("Números pares del 1 al 20:", obtenerPares(20));

console.log("\n--- EJEMPLO COMBINADO 3: Validador de edad ---");

const validarEdad = (edad) => {
  if (typeof edad !== "number") {
    return "Error: La edad debe ser un número";
  }

  if (edad < 0) {
    return "Error: La edad no puede ser negativa";
  }

  if (edad < 13) {
    return "Niño";
  } else if (edad < 18) {
    return "Adolescente";
  } else if (edad < 65) {
    return "Adulto";
  } else {
    return "Adulto mayor";
  }
};

console.log("Edad 10:", validarEdad(10));
console.log("Edad 16:", validarEdad(16));
console.log("Edad 30:", validarEdad(30));
console.log("Edad 70:", validarEdad(70));
console.log("Edad 'abc':", validarEdad("abc"));