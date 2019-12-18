function randomNumber() {
    return Math.floor((Math.random() * 10));
}

function jeuRandomNumber() {
    let nbrandom = randomNumber();
    let win = false;
    let nbEssai = 3;

    let valUser = prompt("Hey ! Trouve le nombre !");
    let msg;

    while (nbEssai > 0 && !win) {

        if (valUser > nbrandom) {
            msg = "C'est un nombre plus petit ! Vie restante : " + nbEssai;
        } else {
            msg = "C'est un nombre plus grand ! Vie restante : " + nbEssai;
        }

        valUser = prompt(msg);


        if (valUser == nbrandom) {
            win = true;
            window.alert("Bravo tu as gagné ! Le nombre était bien : " + nbrandom);
        } else {
            nbEssai -= 1;
        }
    }

    if (nbEssai < 1) {
        window.alert("Dommage, tu as perdu. Le nombre était : " + nbrandom);
    }
}

jeuRandomNumber();


