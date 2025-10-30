// ==========================================
// CLASE 2 - EJEMPLOS EN VIVO
// ==========================================
// Arrays, Objetos y Métodos

console.log("=== CLASE 2: ARRAYS, OBJETOS Y MÉTODOS ===");

// ==========================================
// 1. ARRAYS - BÁSICOS
// ==========================================

console.log("\n--- 1. Creación de Arrays ---");

// Diferentes formas de crear arrays
const numeros = [1, 2, 3, 4, 5];
const frutas = ["manzana", "banana", "naranja"];
const mixto = [1, "texto", true, null, { nombre: "Ana" }];
const vacio = [];

console.log("Números:", numeros);
console.log("Frutas:", frutas);
console.log("Mixto:", mixto);

console.log("\n--- 2. Acceso a Elementos ---");

console.log("Primera fruta:", frutas[0]); // "manzana"
console.log("Segunda fruta:", frutas[1]); // "banana"
console.log("Última fruta:", frutas[frutas.length - 1]); // "naranja"

// Modificar elemento
frutas[1] = "frutilla";
console.log("Frutas modificadas:", frutas);

// Longitud del array
console.log("Cantidad de frutas:", frutas.length);

// ==========================================
// 2. MÉTODOS BÁSICOS
// ==========================================

console.log("\n--- 3. push y pop ---");

const colores = ["rojo", "verde"];
console.log("Colores iniciales:", colores);

// push - agrega al final
colores.push("azul");
console.log("Después de push('azul'):", colores);

colores.push("amarillo", "violeta");
console.log("Después de push múltiple:", colores);

// pop - elimina el último
const ultimo = colores.pop();
console.log("Elemento eliminado con pop:", ultimo);
console.log("Array después del pop:", colores);

console.log("\n--- 4. unshift y shift ---");

const letras = ["b", "c"];
console.log("Letras iniciales:", letras);

// unshift - agrega al inicio
letras.unshift("a");
console.log("Después de unshift('a'):", letras);

// shift - elimina el primero
const primero = letras.shift();
console.log("Elemento eliminado con shift:", primero);
console.log("Array después del shift:", letras);

console.log("\n--- 5. slice y splice ---");

const animales = ["perro", "gato", "pájaro", "pez", "conejo"];
console.log("Animales originales:", animales);

// slice - copia una porción (NO modifica original)
const algunos = animales.slice(1, 4); // del índice 1 al 3 (4 no incluido)
console.log("slice(1, 4):", algunos);
console.log("Array original (sin cambios):", animales);

// splice - elimina/inserta elementos (SÍ modifica original)
const eliminados = animales.splice(2, 1); // elimina 1 elemento desde índice 2
console.log("Elementos eliminados:", eliminados);
console.log("Array después de splice:", animales);

// splice para insertar
animales.splice(2, 0, "tortuga", "hamster"); // inserta sin eliminar
console.log("Después de insertar con splice:", animales);

// ==========================================
// 3. MÉTODOS MODERNOS - forEach
// ==========================================

console.log("\n--- 6. forEach ---");

const precios = [100, 250, 75, 320];

// forEach ejecuta una función para cada elemento
console.log("Precios con IVA (21%):");
precios.forEach((precio) => {
  const conIVA = precio * 1.21;
  console.log(`$${precio} → $${conIVA.toFixed(2)}`);
});

// forEach con índice
const ciudades = ["Buenos Aires", "Córdoba", "Rosario"];
ciudades.forEach((ciudad, index) => {
  console.log(`${index + 1}. ${ciudad}`);
});

// ==========================================
// 4. MAP - Transformar
// ==========================================

console.log("\n--- 7. map ---");

const nums = [1, 2, 3, 4, 5];

// map crea un NUEVO array transformando cada elemento
const duplicados = nums.map((num) => num * 2);
console.log("Números originales:", nums);
console.log("Números duplicados:", duplicados);

const cuadrados = nums.map((num) => num ** 2);
console.log("Números al cuadrado:", cuadrados);

// map con objetos
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 30 },
  { nombre: "María", edad: 28 },
];

const nombres = usuarios.map((usuario) => usuario.nombre);
console.log("Solo nombres:", nombres);

const usuariosConSaludo = usuarios.map((usuario) => {
  return {
    ...usuario,
    saludo: `Hola, soy ${usuario.nombre}`,
  };
});
console.log("Usuarios con saludo:", usuariosConSaludo);

// ==========================================
// 5. FILTER - Filtrar
// ==========================================

console.log("\n--- 8. filter ---");

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter retorna elementos que cumplen una condición
const pares = numeros2.filter((num) => num % 2 === 0);
console.log("Números pares:", pares);

const mayoresA5 = numeros2.filter((num) => num > 5);
console.log("Mayores a 5:", mayoresA5);

// filter con objetos
const productos = [
  { nombre: "Laptop", precio: 1000, enStock: true },
  { nombre: "Mouse", precio: 25, enStock: false },
  { nombre: "Teclado", precio: 80, enStock: true },
  { nombre: "Monitor", precio: 300, enStock: true },
];

const disponibles = productos.filter((p) => p.enStock);
console.log("Productos disponibles:", disponibles);

const caros = productos.filter((p) => p.precio > 50);
console.log("Productos caros (>$50):", caros);

const disponiblesYCaros = productos.filter((p) => p.enStock && p.precio > 50);
console.log("Disponibles Y caros:", disponiblesYCaros);

// ==========================================
// 6. FIND - Encontrar
// ==========================================

console.log("\n--- 9. find y findIndex ---");

const estudiantes = [
  { id: 1, nombre: "Ana", nota: 8 },
  { id: 2, nombre: "Juan", nota: 6 },
  { id: 3, nombre: "María", nota: 9 },
];

// find retorna el PRIMER elemento que cumple la condición
const estudianteConId2 = estudiantes.find((est) => est.id === 2);
console.log("Estudiante con id 2:", estudianteConId2);

const primerAprobado = estudiantes.find((est) => est.nota >= 7);
console.log("Primer aprobado:", primerAprobado);

const noEncontrado = estudiantes.find((est) => est.id === 999);
console.log("Estudiante no existente:", noEncontrado); // undefined

// findIndex retorna el índice
const indiceJuan = estudiantes.findIndex((est) => est.nombre === "Juan");
console.log("Índice de Juan:", indiceJuan); // 1

// ==========================================
// 7. REDUCE - Reducir
// ==========================================

console.log("\n--- 10. reduce ---");

const valores = [1, 2, 3, 4, 5];

// reduce combina todos los elementos en un único valor
const suma = valores.reduce((acumulador, numero) => {
  console.log(`Acumulador: ${acumulador}, Número: ${numero}`);
  return acumulador + numero;
}, 0); // 0 es el valor inicial

console.log("Suma total:", suma);

// Encontrar el máximo
const maximo = valores.reduce((max, num) => {
  return num > max ? num : max;
}, valores[0]);
console.log("Número máximo:", maximo);

// Sumar precios de productos
const carrito = [
  { producto: "Laptop", precio: 1000 },
  { producto: "Mouse", precio: 25 },
  { producto: "Teclado", precio: 80 },
];

const total = carrito.reduce((sum, item) => sum + item.precio, 0);
console.log("Total del carrito:", total);

// Contar ocurrencias
const vocales = ["a", "e", "i", "a", "o", "a", "e"];
const conteo = vocales.reduce((acc, vocal) => {
  acc[vocal] = (acc[vocal] || 0) + 1;
  return acc;
}, {});
console.log("Conteo de vocales:", conteo);

// ==========================================
// 8. ENCADENAR MÉTODOS
// ==========================================

console.log("\n--- 11. Encadenando Métodos ---");

const ventas = [
  { producto: "Laptop", precio: 1000, cantidad: 2 },
  { producto: "Mouse", precio: 25, cantidad: 5 },
  { producto: "Teclado", precio: 80, cantidad: 3 },
  { producto: "Monitor", precio: 300, cantidad: 0 },
];

// Filtrar productos con stock, calcular total por producto, y sumar todo
const totalVentas = ventas
  .filter((v) => v.cantidad > 0)
  .map((v) => v.precio * v.cantidad)
  .reduce((sum, total) => sum + total, 0);

console.log("Total de ventas:", totalVentas);

// Paso por paso para entender:
console.log("\nPaso a paso:");
const conStock = ventas.filter((v) => v.cantidad > 0);
console.log("1. Con stock:", conStock);

const totalesPorProducto = conStock.map((v) => v.precio * v.cantidad);
console.log("2. Totales por producto:", totalesPorProducto);

const sumaFinal = totalesPorProducto.reduce((sum, total) => sum + total, 0);
console.log("3. Suma final:", sumaFinal);

// ==========================================
// 9. SOME y EVERY
// ==========================================

console.log("\n--- 12. some y every ---");

const edades = [18, 20, 25, 30];

// some - verifica si AL MENOS UNO cumple la condición
const hayMenor = edades.some((edad) => edad < 18);
console.log("¿Hay algún menor de edad?", hayMenor); // false

const hayMayorDe25 = edades.some((edad) => edad > 25);
console.log("¿Hay alguien mayor de 25?", hayMayorDe25); // true

// every - verifica si TODOS cumplen la condición
const todosMayores = edades.every((edad) => edad >= 18);
console.log("¿Todos son mayores de edad?", todosMayores); // true

const todosMayoresDe20 = edades.every((edad) => edad >= 20);
console.log("¿Todos son mayores de 20?", todosMayoresDe20); // false

// ==========================================
// 10. OBJETOS - BÁSICOS
// ==========================================

console.log("\n--- 13. Objetos ---");

// Crear objeto
const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Buenos Aires",
  profesion: "Desarrolladora",
};

console.log("Persona:", persona);

// Acceso a propiedades
console.log("Nombre:", persona.nombre); // dot notation
console.log("Edad:", persona["edad"]); // bracket notation

// Modificar propiedades
persona.edad = 26;
persona["ciudad"] = "Córdoba";
console.log("Persona modificada:", persona);

// Agregar nuevas propiedades
persona.email = "ana@example.com";
console.log("Con email:", persona);

// Eliminar propiedades
delete persona.profesion;
console.log("Sin profesion:", persona);

// ==========================================
// 11. MÉTODOS EN OBJETOS
// ==========================================

console.log("\n--- 14. Métodos en Objetos ---");

const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,

  // Método
  descripcion() {
    return `${this.marca} ${this.modelo} (${this.año})`;
  },

  // Otro método
  antiguedad() {
    const añoActual = new Date().getFullYear();
    return añoActual - this.año;
  },
};

console.log(auto.descripcion()); // "Toyota Corolla (2022)"
console.log("Años de uso:", auto.antiguedad());

// ==========================================
// 12. OBJECT METHODS
// ==========================================

console.log("\n--- 15. Object.keys, values, entries ---");

const config = {
  tema: "oscuro",
  idioma: "español",
  notificaciones: true,
};

// Object.keys - array de claves
const claves = Object.keys(config);
console.log("Claves:", claves);

// Object.values - array de valores
const valores2 = Object.values(config);
console.log("Valores:", valores2);

// Object.entries - array de pares [clave, valor]
const entradas = Object.entries(config);
console.log("Entradas:", entradas);

// Iterar sobre objeto
console.log("\nIterando sobre configuración:");
Object.entries(config).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});

// ==========================================
// 13. DESTRUCTURING
// ==========================================

console.log("\n--- 16. Destructuring de Arrays ---");

const colores2 = ["rojo", "verde", "azul", "amarillo"];

// Sin destructuring
const color1 = colores2[0];
const color2 = colores2[1];

// Con destructuring
const [primero2, segundo, tercero] = colores2;
console.log("Primero:", primero2);
console.log("Segundo:", segundo);
console.log("Tercero:", tercero);

// Saltear elementos
const [r, , b] = colores2;
console.log("Rojo:", r);
console.log("Azul:", b);

// Rest operator
const [principal, ...otros] = colores2;
console.log("Principal:", principal);
console.log("Otros:", otros);

console.log("\n--- 17. Destructuring de Objetos ---");

const usuario = {
  nombre: "Carlos",
  edad: 30,
  email: "carlos@example.com",
  ciudad: "Rosario",
};

// Sin destructuring
const nombreUsuario = usuario.nombre;
const edadUsuario = usuario.edad;

// Con destructuring
const { nombre, edad, email } = usuario;
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Email:", email);

// Renombrar variables
const { nombre: nombreCompleto, edad: años } = usuario;
console.log("Nombre completo:", nombreCompleto);
console.log("Años:", años);

// Valores por defecto
const { nombre: n, pais = "Argentina" } = usuario;
console.log("País:", pais);

// Rest operator con objetos
const { nombre: nom, ...datosExtra } = usuario;
console.log("Datos extra:", datosExtra);

// ==========================================
// 14. JSON
// ==========================================

console.log("\n--- 18. JSON ---");

const libro = {
  titulo: "JavaScript Avanzado",
  autor: "Juan Pérez",
  año: 2024,
  temas: ["arrays", "objetos", "async"],
};

// Objeto a JSON string
const jsonString = JSON.stringify(libro);
console.log("JSON string:", jsonString);
console.log("Tipo:", typeof jsonString);

// JSON string a objeto
const libroRecuperado = JSON.parse(jsonString);
console.log("Objeto recuperado:", libroRecuperado);
console.log("Tipo:", typeof libroRecuperado);

// JSON con formato bonito (para debugging)
const jsonBonito = JSON.stringify(libro, null, 2);
console.log("JSON formateado:\n", jsonBonito);

// ==========================================
// 15. SPREAD OPERATOR
// ==========================================

console.log("\n--- 19. Spread Operator ---");

// Spread con arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinado = [...arr1, ...arr2];
console.log("Arrays combinados:", combinado);

const conExtra = [0, ...arr1, 99, ...arr2, 100];
console.log("Con elementos extra:", conExtra);

// Copiar array
const copiaArray = [...arr1];
console.log("Copia del array:", copiaArray);

// Spread con objetos
const datosBasicos = { nombre: "Ana", edad: 25 };
const datosContacto = { email: "ana@example.com", telefono: "123456" };

const perfilCompleto = { ...datosBasicos, ...datosContacto };
console.log("Perfil completo:", perfilCompleto);

// Sobrescribir propiedades
const actualizado = { ...datosBasicos, edad: 26, ciudad: "Buenos Aires" };
console.log("Perfil actualizado:", actualizado);

// ==========================================
// 16. EJEMPLO INTEGRADOR FINAL
// ==========================================

console.log("\n--- 20. EJEMPLO INTEGRADOR ---");

const empleados = [
  { id: 1, nombre: "Ana", departamento: "IT", salario: 80000 },
  { id: 2, nombre: "Juan", departamento: "Ventas", salario: 60000 },
  { id: 3, nombre: "María", departamento: "IT", salario: 75000 },
  { id: 4, nombre: "Pedro", departamento: "Ventas", salario: 55000 },
  { id: 5, nombre: "Laura", departamento: "IT", salario: 90000 },
];

// 1. Filtrar empleados de IT
const empleadosIT = empleados.filter((emp) => emp.departamento === "IT");
console.log("Empleados de IT:", empleadosIT);

// 2. Obtener solo nombres de IT
const nombresIT = empleadosIT.map((emp) => emp.nombre);
console.log("Nombres de IT:", nombresIT);

// 3. Salario promedio de IT
const salarioPromedioIT =
  empleadosIT.reduce((sum, emp) => sum + emp.salario, 0) / empleadosIT.length;
console.log("Salario promedio IT:", salarioPromedioIT);

// Todo en una cadena:
const resultado =
  empleados
    .filter((e) => e.departamento === "IT")
    .reduce((sum, e) => sum + e.salario, 0) /
  empleados.filter((e) => e.departamento === "IT").length;

console.log("Resultado encadenado:", resultado);

// Análisis completo por departamento
const analisisPorDepartamento = empleados.reduce((acc, emp) => {
  if (!acc[emp.departamento]) {
    acc[emp.departamento] = {
      empleados: [],
      totalSalarios: 0,
      cantidad: 0,
    };
  }

  acc[emp.departamento].empleados.push(emp.nombre);
  acc[emp.departamento].totalSalarios += emp.salario;
  acc[emp.departamento].cantidad++;
  acc[emp.departamento].promedio =
    acc[emp.departamento].totalSalarios / acc[emp.departamento].cantidad;

  return acc;
}, {});

console.log("Análisis por departamento:", analisisPorDepartamento);

console.log("\n=== FIN DE LOS EJEMPLOS ===");