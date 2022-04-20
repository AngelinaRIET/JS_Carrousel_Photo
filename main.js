"use strict";

/*
 * L'objectif de l'exercice est de réaliser un diaporama de photos qui s'affichent les
 * unes après les autres, toutes les 5 secondes. Puis ensuite de revenir à la première
 * photo et de recommencer, à l'infini. C'est ce qu'on appelle un carousel de photos.
 */

// ---- VARIABLES ET CONSTANTES GLOBALES
const delayCaroussel = 5000;
let currentPhoto; // Numéro de la photo courant affichée (indice dans le tableau ci-dessous)
let photos; // Tableau d'objets DOM représentant les balises <img>
let timer; // Un timer pour gérer l'interval

// AU CHARGEMENT DE LA PAGE (DOMContentLoaded) 
window.addEventListener('DOMContentLoaded', init);

// ---- FONCTIONS

/**
 * init()
 * 
 * Initialise le caroussel
 */
function init() {

    // photos <= CHARGER LES IMAGES
    photos = document.querySelectorAll('#diaporama > img');
    console.log(photos);

    // LANCER la lecture
    play();

    // currentPhoto <= 1;
    currentPhoto = 1;

    // Ajoute des évènements sur les boutons de l'interface
    document.querySelector('#diaporama-controls .bt-pause').addEventListener('click', pause);
    document.querySelector('#diaporama-controls .bt-play').addEventListener('click', play);
    document.querySelector('#diaporama-controls .bt-next').addEventListener('click', goToNext);
    document.querySelector('#diaporama-controls .bt-previous').addEventListener('click', gotToPrevious);
    document.querySelector('#diaporama-controls .bt-random').addEventListener('click', getRandomImage);
}

/**=
 * next()
 * 
 * Affiche l'image suivante
 */
function goToNext() {

    // RETIRER LA CLASSE "visible" DE LA PHOTO ACTUELLE
    photos[currentPhoto - 1].classList.remove('visible');

    // GESTION DES COUCHES DES IMAGES
    if (document.querySelector('img.back'))
        document.querySelector('img.back').classList.remove('back');
    photos[currentPhoto - 1].classList.add('back');

    // INCREMENTER currentPhoto
    currentPhoto++;

    // SI currentPhoto > nombre de photos ALORS
        // currentPhoto <= 1
    // FINSI
    if (currentPhoto > photos.length) {
        currentPhoto = 1;
    }

    // AJOUTER LA CLASSE "visible" SUR LA NOUVELLE PHOTO
    photos[currentPhoto - 1].classList.add('visible');
}

/**
 * Affiche l'image précédente
 */
function gotToPrevious() {

    // RETIRER LA CLASSE "visible" DE LA PHOTO ACTUELLE
    photos[currentPhoto - 1].classList.remove('visible');

    // DECREMENTER currentPhoto
    currentPhoto--;

    // SI currentPhoto < 1 ALORS
        // currentPhoto <= photos.length
    // FINSI
    if (currentPhoto < 1 ) {
        currentPhoto = photos.length;
    }

    // AJOUTER LA CLASSE "visible" SUR LA NOUVELLE PHOTO
    photos[currentPhoto - 1].classList.add('visible');
}

/**
 * Relance le carrousel
 */
function play(){
    // LANCER next() TOUTES LES 5000 ms
    if (timer == null) {
        timer = window.setInterval(goToNext, delayCaroussel);
    }
}

/**
 * Met le carrousel en pause
 */
function pause(){
    window.clearInterval(timer);
    timer = null;
}

/**
 * Choisi une image au hasard
 */
function getRandomImage() {

    // RETIRER LA CLASSE "visible" DE LA PHOTO ACTUELLE
    photos[currentPhoto - 1].classList.remove('visible');    

    // CRÉATION DES VARIABLES POUR LE TIRAGE AU SORT0
    let randomInt;
    let nbTirage = 0;

    // TIRER UNE NOUVELLE PHOTO AU HASARD
    do {
        nbTirage++;
        randomInt = randomInteger(1, photos.length);
    }  while (randomInt == currentPhoto) 
    // RECOMMENCER TANT QU'ON TIRE LE NUMERO DE LA PHOTO ACTUELLE

    console.log('J\'ai du tirer ' + nbTirage + ' fois au hasard');

    // CHOISIR L'IMAGE TROUVÉE COMME NOUVELLE IMAGE ACTUELLE
    currentPhoto = randomInt;

    // AFFICHE L'IMAGE
    photos[currentPhoto - 1].classList.add('visible'); 
}

// ---- CODE PRINCIPAL


