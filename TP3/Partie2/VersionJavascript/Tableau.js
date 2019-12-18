window.addEventListener("load", initialisation);

function messageBienvenue() {
    event.preventDefault();

    var france = ["Grenoble", "Paris", "Lyon", "Marseille"];
    var espagne = ["Madrid", "Barcelone", "Séville", "Valencia"];
    var italie = ["Rome", "Milan", "Naples", "Turin"];
    var angleterre = ["Londres", "Birmingham", "Glasgow", "Manchester"];

    var ville = document.forms["formVille"]["nom"].value;
    var pays;
    var isFind = false;
    var listeVilles;

    var elementDiv = document.getElementById("liste");
    elementDiv.innerHTML = "";

    if (france.indexOf(ville) != -1) {
        pays = "France";
        listeVilles = france.slice();
        isFind = true;
    } else if (espagne.indexOf(ville) != -1) {
        pays = "Espagne";
        listeVilles = espagne.slice();
        isFind = true;
    } else if (italie.indexOf(ville) != -1) {
        pays = "Italie";
        listeVilles = italie.slice();
        isFind = true;
    } else if (angleterre.indexOf(ville) != -1) {
        pays = "Angleterre";
        listeVilles = angleterre.slice();
        isFind = true;
    }

    if (isFind) {
        listeVilles.splice(listeVilles.indexOf(ville),1);

        elementDiv.innerHTML += "<p>Bienvenue en " + pays + " !</p>";
        elementDiv.innerHTML += "<ul id='ville'></ul>";

        var elementUl = document.getElementById("ville");
        listeVilles.forEach(element => elementUl.innerHTML += "<li>" + element + "</li>");

        var elementBtn = document.getElementById("button");
        elementBtn.setAttribute("value", "Ajouter une destination");
        document.getElementById("formVille").removeEventListener("submit", messageBienvenue);
        document.getElementById("formVille").addEventListener("submit", addVille);
    }
}

function addVille() {
    event.preventDefault();

    var ville = document.forms["formVille"]["nom"].value;

    if (ville) {
        if (window.confirm("Êtes-vous sûr de vouloir rajouter la ville ?")) {
            var elementUl = document.getElementById("ville");
            elementUl.innerHTML += "<li>" + ville + "</li>"
        }
    }
}


function initialisation() {
    document.getElementById("formVille").addEventListener("submit", messageBienvenue);
}