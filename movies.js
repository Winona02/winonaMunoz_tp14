let totalPeliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];


function peliculaMayuscula(peliculaMasVendida) {
    let pelicula = peliculaMasVendida.toUpperCase();
    
    totalPeliculas = totalPeliculas.filter(pelicula => pelicula !== peliculaMasVendida);
    
    totalPeliculas.unshift(pelicula);
    
    return totalPeliculas;
}

console.log("La película más vendida aparece primero y con mayúsculas: ");
console.log(peliculaMayuscula("Thor: amor y trueno"));

console.log("--------------------------------------");

let peliculasEstreno = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"];

let cadenaTexto = peliculasEstreno.join(", ")

console.log("Películas próximas a estrenar: ");

console.log(cadenaTexto);

console.log("--------------------------------------");

function combinacionPeliculas(primerArray, segundoArray) {
    let combinacion = primerArray.concat(segundoArray);

    return combinacion;
}

console.log("La combinación de todas las películas es: ");

console.log(combinacionPeliculas(totalPeliculas,peliculasEstreno));