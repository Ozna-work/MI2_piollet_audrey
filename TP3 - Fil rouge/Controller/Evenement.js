function afficher_tableau() {
    for (var i = 0; i < evenements.length; ++i) {
        $("table").append('<tr>' +
            '<td>' + evenements[i].typeAnimal + '<img src="' + evenements[i].cheminImg + '"alt=""> </td> ' +
            '<td>' + evenements[i].date +', '+ evenements[i].heuredeb + ' - ' + evenements[i].heurefin+'</td> ' +
            '<td>' + evenements[i].typeEvenement + '</td> ' +
            '<td>' + evenements[i].tarif + '</td>' +
            '<td> <input type="submit" name="'+i+'" value="Supprimer"></td>'+
            '<td> <input type="submit" name="'+i+'" value="Modifier"></td>'+
            '</tr>');
    }
}

afficher_tableau();

$("body").append('<form id="insertEvenement"></form>');

$("#insertEvenement").append('<label for="">Types d\'animaux</label>' +
    '<input id="typeAnimaux" type="text" name="" value="" required>' +
    '<label for="">Image</label>' +
    '<input id="img" type="text" name="" value="" required>' +
    '<label for="">Date</label>' +
    '<input id="date" type="date" name="" value="" required>' +
    '<input id="heuredeb" type="time" name="" value="" required>' +
    '<input id="heurefin" type="time" name="" value="" required>' +
    '<label for="">Type évènement</label>' +
    '<input id="typeevent" type="text" name="" value="" required>' +
    '<label for="">Tarif</label>' +
    '<select id="tarif"><option>Gratuit</option><option>Payant</option></select>' +
    '<input type="submit" required>'
);

$("#insertEvenement").on('submit',function (event) {
    event.preventDefault();

    let date = new Date($("#date").val());
    let mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    var resDate = date.getDate() + " " + mois[date.getDay()] + " " + date.getFullYear();


    evenement = new Evenement($("#typeAnimaux").val(), $("#img").val(),resDate,$("#heuredeb").val(),$("#heurefin").val(),$('#typeevent').val(),$("#tarif").val());

    evenements.push(evenement);

    $("table").empty();
    afficher_tableau();
});

$("input[value='Supprimer']").on('click', function (event) {
    event.preventDefault();

    evenements.splice(this.id,1);
    $("table").empty();
    afficher_tableau();
})
