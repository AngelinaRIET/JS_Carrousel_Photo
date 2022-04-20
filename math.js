/**
 * Tire un nombre aléatoire entre un min et max
 * @param {*} min minimum inclus
 * @param {*} max maximum inclus
 * @returns Un entier en min et max inclus 
 */
 function randomInteger(min, max){

    // Calcul le nombre d'entiers possibles entre min et max (inclus)
    let nbPossibilites = (max-min) +1;

    // Trouve un entier aléatoire entre 0 et le nombre d'entiers possibles (-1)
    let nbRandom = Math.floor(Math.random()*nbPossibilites)

    // Calcul notre entier aléatoire en min et max
    let resultat = min + nbRandom;

    return resultat;
}
