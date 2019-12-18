window.addEventListener("load", initialisation);

function messageBienvenue() {

    var france = ["Grenoble", "Paris", "Lyon", "Marseille"];
    var espagne = ["Madrid", "Barcelone", "Séville", "Valencia"];
    var italie = ["Rome", "Milan", "Naples", "Turin"];
    var angleterre = ["Londres", "Birmingham", "Glasgow", "Manchester"];

    var ville = document.forms["formVille"]["nom"].value;

    if (france.indexOf(ville) != -1) {
        alert("Bienvenue en France !");
    } else if (espagne.indexOf(ville) != -1) {
        alert("Bienvenue en Espagne !");
    } else if (italie.indexOf(ville) != -1) {
        alert("Bienvenue en Italie !");
    } else if (angleterre.indexOf(ville) != -1) {
        alert("Bienvenue en Angleterre !");
    } else {
        event.preventDefault();
    }
}

function initialisation() {
    document.getElementById("formVille").addEventListener("submit", messageBienvenue);
}