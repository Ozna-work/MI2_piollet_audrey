function messageBienvenue() {

    var france = ["Grenoble", "Paris", "Lyon", "Marseille"];
    var espagne = ["Madrid", "Barcelone", "Séville", "Valencia"];
    var italie = ["Rome", "Milan", "Naples", "Turin"];
    var angleterre = ["Londres", "Birmingham", "Glasgow", "Manchester"];

    var ville = $("#nom").val();
    var pays;
    var isFind = false;
    var listeVilles;

    $("div").empty();

    if (france.indexOf(ville) != -1) {
        pays = "France";
        listeVilles = $.makeArray(france);
        isFind = true;
    } else if (espagne.indexOf(ville) != -1) {
        pays ="Espagne";
        listeVilles = $.makeArray(espagne);
        isFind = true;
    } else if (italie.indexOf(ville) != -1) {
        pays = "Italie";
        listeVilles = $.makeArray(italie);
        isFind = true;
    } else if (angleterre.indexOf(ville) != -1) {
        pays = "Angleterre";
        listeVilles = $.makeArray(angleterre);
        isFind = true;
    }

    if (isFind) {
        listeVilles.splice($.inArray(ville, listeVilles),1);

        $("div").append("<p>Bienvenue en "+pays+" !</p>");
        $("div").append("<ul></ul>");
        listeVilles.forEach(element => $("ul").append("<li>"+element+"</li>"));
        $("#button").val("Ajouter une destination");
    }

}

function addLi() {

    if ($("#nom").val()) {
        if (window.confirm("Êtes-vous sûr de vouloir rajouter la ville ?")) {
            $("ul").append("<li>" + $("#nom").val() + "</li>");
        }
    }
}

function initialisation() {
    $("form").submit(function (event) {
        event.preventDefault();

        if($('#button').val() == "Choisir une destination") {
            messageBienvenue();
        } else {
            addLi();
        }
    });
}

initialisation();