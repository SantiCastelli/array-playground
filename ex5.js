// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'away', 'silent', 'generate', 'stunning', 'complete'];

// Usa el método filter para filtrar las palabras que empiezan por la letra 'e'

console.log(words.filter(e => e[0] == "e")); // TODO [ 'elite', 'exuberant']

// Usa el método filter para filtrar las palabras que empiezan por vocal

console.log(words.filter((palabra) => {
    const regexp = new RegExp('^[aeiou].*', 'i');
    return regexp.test(palabra);
})); // TODO [ 'elite', 'exuberant', 'away']
