// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

function cortaPorAqui(corteIzq, corteDer, array) {
    let indiceIzq = array.indexOf(corteIzq);
    let indiceDer = array.indexOf(corteDer) + 1;
    return array.slice(indiceIzq, indiceDer);
}

/**
 * Utiliza de manera combinada y adecuadamente el método .findIndex y .slice para 'cortar' un array entre dos elementos. Para simplificar, el primer animal siempre está 'a la izquierda' del segundo animal por el que queremos cortar
 */

let animales = ["Elefante", "Tigre", "Leopardo", "Ñu", "Pantera"];

console.log(cortaPorAqui("Elefante", "Leopardo", animales)); // ["Elefante", "Tigre", "Leopardo"]
console.log(cortaPorAqui("Tigre", "Ñu", animales)); // ["Tigre", "Leopardo", "Ñu"]

//

