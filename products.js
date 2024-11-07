let electrodomesticos = ["televisor", "computadora", "pava eléctrica", "heladera", "microondas", "freezer"];

console.log("Este es el array original: ");

for (let i = 0; i < electrodomesticos.length; i++) {
    console.log(electrodomesticos[i]);
}

console.log("--------------------------------------");

//a. Acceder de manera arbitraria a diferentes elementos del array.

//declaro una funcion que va a retornar un elemento aleatorio del array. de momento declaro parametros
function elementosArbitrarios(array) {
    //declaro una variable para que se guarde el valor aleatorio generado. Como Math.random genera un numero decimal, necesito antes usar Math.floor para que redondee hacia abajo ese numero decimal a un numero entero... ya que los indices de array son numeros enteros
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    // la funcion va a retornar el elemento del array que se encuentre en la posicion (o sea en el indice) que este guardado en la variable indiceAleatorio
    return array[indiceAleatorio];
}

console.log("Elemento del array tomado arbitrariamente: ");

//llamo a la funcion y le paso como argumento el array electrodomesticos. Esto lo guardo en la variable mostrarElemento para luego imprimirlo.
let mostrarElemento = elementosArbitrarios(electrodomesticos);

console.log(mostrarElemento);


console.log("--------------------------------------");

//b. Extraer el primer elemento del array y agregarlo al final del mismo.

console.log("Elimino el primer elemento y lo agrego al final: ");

let primerElemento = electrodomesticos[0];
electrodomesticos.shift();
electrodomesticos.push(primerElemento);

for (let i = 0; i < electrodomesticos.length; i++) {
    console.log(electrodomesticos[i]);
}

console.log("--------------------------------------");

// c. Agregar al final del array dos (2) nuevos productos.
console.log("Agrego 2 elementos nuevos al final: ");

electrodomesticos.push("cafetera", "licuadora");

for (let i = 0; i < electrodomesticos.length; i++) {
    console.log(electrodomesticos[i]);
}
console.log("--------------------------------------");

// d. Mostrar por la consola la cantidad de elementos que contiene el array.

let cantidadElementos = electrodomesticos.length;

console.log(`La cantidad de elementos que contiene el array "electrodomesticos" es : ${cantidadElementos}`);

console.log("--------------------------------------");

// e. Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje: “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado no existe”.

let productoBuscado = "heladera"
// let productoBuscado = "mesa" // prueba para ver si funcionaba el else

console.log(`Buscar en el array si el elemento '${productoBuscado}' existe: `);

let encontrarArray = electrodomesticos.includes(productoBuscado);

if (encontrarArray) {
    console.log(`Producto encontrado, '${productoBuscado}' está dentro del array.`);
} else {
    console.log(`El producto '${productoBuscado}' no existe dentro del array.`)
}

console.log("--------------------------------------");

let productoBuscado2 = "mesa"

console.log(`Buscar en el array si el elemento '${productoBuscado2}' existe: `);

let encontrarArray2 = electrodomesticos.includes(productoBuscado2);

if (encontrarArray2) {
    console.log(`Producto encontrado, '${productoBuscado2}' está dentro del array.`);
} else {
    console.log(`El producto '${productoBuscado2}' no existe dentro del array.`)
}

console.log("--------------------------------------");

// f. Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.

console.log("Unir todos los elementos en un string y separarlos por un esppacio: ");

let unirElementos = electrodomesticos.join(" ");

console.log(unirElementos);

console.log("--------------------------------------");

// g. Determinar la cantidad de elementos que posee la cadena de texto obtenida.

let cantidadElementosObtenida = unirElementos.length;

console.log(`La cantidad de elementos del string obtenido es : ${cantidadElementosObtenida}`);

console.log("--------------------------------------");

// h. Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.

let cambiarNombreElemento = unirElementos.replace("microondas", "horno eléctrico");

console.log("Cambiar el elemento 'microondas' por 'horno eléctrico'");

console.log(cambiarNombreElemento);

console.log("--------------------------------------");


// i. Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto. Tener en cuenta que los elementos deben estar separados por una coma.

//como en mi array tengo elementos 'combinados' de palabras, primero tengo que reemplazar esa cambinación de palabras por una sola palabra, por ejemplo "pava electrica" por "pava_electrica" para que a la hora de hacer el .split() no se dividan y me tome estas palabras por separado.
let cadenaConGuiones = cambiarNombreElemento
.replace("pava eléctrica", "pava_eléctrica")
.replace("horno eléctrico", "horno_eléctrico");

console.log(`Esta es una cadena con guiones: ${cadenaConGuiones}`);

console.log("--------------------------------------");

//ahora que las frases son una sola palabra, ya puedo dividir la cadena de texto en un array de palabras. Las cuales van a estar separadas por un espacio gracias a este string (" ")
let nuevoArray = cadenaConGuiones.split(" ");

console.log("Array con guiones: ");


console.log(nuevoArray);

console.log("--------------------------------------");

//como no quiero que queden los guiones en el array, reemplazo estos por un espacio. Pero antes, como los guiones son parte de las palabras combinadas tengo que rastrear los guiones dentro de los elementos del array a traves de .map() (que actua como funcion callback)
nuevoArray= nuevoArray.map(palabra => palabra.replace("_", " "));

console.log("Array sin guiones: ");

console.log(nuevoArray);
