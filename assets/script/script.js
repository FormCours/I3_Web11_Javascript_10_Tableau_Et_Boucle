'use strict';


console.warn('Initialiser un tableau');
console.log(' - Vide');

const initTab1 = new Array();
const initTab2 = [];
console.log(initTab1, initTab2);

console.log(' - Avec des valeurs');
// Attention, avec la méthode "new Array", s'il n'y a 
// qu'un seul parametre, celui-ci représente la longueur
const initTab3 = new Array(5, 3, 4, 2);

const initTab4 = ['Della', 'Zaza', 'Daisy'];
console.log(initTab3, initTab4);


console.warn('Modifier des talbeaux');
const modifTab = ['Laure', 'Yousra', 'Ikram', 'Zaza'];
console.table(modifTab);

console.log(' - Ajouter des valeurs');
// Ajouter des éléments à la fin du tableau
modifTab.push('Gaëlle', 'Chris', 'Madame Jennifer');
console.table(modifTab);

// Ajouter des éléments au debut du tableau
modifTab.unshift('Maya', 'Soumaya');
console.table(modifTab);

console.log(' - Supprimer des valeurs');
// Retirer le dernier élément
modifTab.pop();
console.table(modifTab);

// Retirer le premier élément
modifTab.shift();
console.table(modifTab);

console.log(' - Interagir via l\'index');
// • La méthode "splice"
// Les parametres :
//  1) L'index
//  2) Le nombre d'element à supprimer
//  3) Les élements à ajouter (optionnel)

// - Ajouter avec "Splice"
modifTab.splice(2, 0, 'Jennifer');
console.table(modifTab);

// - Retirer avec "Splice"
modifTab.splice(5, 1);
console.table(modifTab);



console.warn('Les operateurs d\'acces');
// Permet d'interagir avec le contenu d'un tableau
// à l'aide de l'index.

console.log(' - Operation de lecture');
// Premiere valeur
const val1 = modifTab[0];
console.log('Premiere Valeur :', val1);

// Derniere valeur
const val2 = modifTab[modifTab.length - 1];
console.log('Derniere Valeur :', val2);

// La cinquieme valeur
const val3 = modifTab[4];
console.log('Cinquieme Valeur :', val3);


console.log(' - Operation de modification');
// Sur une valeur existante
modifTab[2] = 'Della';
console.table(modifTab);

// Ajouter une valeur
modifTab[7] = 'Zahra';
console.table(modifTab);

modifTab[20] = 'Jennifer';
console.table(modifTab);
console.log(modifTab);



// Documentation sur les array
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array







const people = ['Della', 'Zaza', 'Daisy', 'Miss Tick', 'Lili', 'Lulu', 'Zizi' ];

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    
    // Traitement    
    console.log(person);
}

for (const person of people) {
    // Traitement
    console.log(person);
}

people.forEach((person, index) => {
    // Traitement
    console.log(person);
})


// Cloner un tableau
const clone = [...people];