function afficher_tableau() {
    for (var i = 0; i < evenements.length; ++i) {
        $(".row").append('<div class="col-lg-4 col-md-6 col-sm-12">' +
            '<div class="card">' +
            '<img class="card-img-top" src="' + evenements[i].cheminImg + '" alt="Card image cap">' +
            '  <div class="card-body text-center">' +
            '    <h4 class="card-title"><strong>' + evenements[i].typeAnimal + '</strong></h4>' +
            '    <h6 class="font-weight-bold indigo-text py-2">' + evenements[i].date + ', ' + evenements[i].heuredeb + ' - ' + evenements[i].heurefin + '</h6>' +
            '<p class="card-text">' + evenements[i].typeEvenement + ' - ' + evenements[i].tarif + '</p>' +
            '    <a class="px-2 fa-lg li-ic"><input type="submit" name="' + i + '" value="Supprimer"></a>' +
            '    <a class="px-2 fa-lg tw-ic"><input type="submit" name="' + i + '" value="Modifier"></a>' +
            '</div>' +
            '  </div>'
        );
    }


// <div class="col-lg-4 col-md-6 col-sm-12">
//         <div class="card">
//         <img src="${element.image}" class="card-img-top" alt="">
//         <div class="card-body">
//         <h5 class="card-title">${element.country}</h5>
//         <p class="card-text">${element.circuit}</p>
//         <button class="btn btn-primary">Réserver</button>
//         <button class="btn btn-danger remove-button" value="${index}">Supprimer</button>
//         <button class="btn btn-success modify-button" value="${index}">Modifier</button>
//         </div>
//         <div class="card-footer text-muted">
//         ${element.price}€
//         </div>
//         </div>
//         </div>


    // $(".row").append('<div class="col-lg-4 col-md-6 col-sm-12">' +
    //     '<div class="card card-cascade wider reverse">' +
    //     '<img class="card-img-top" src="' + evenements[i].cheminImg + '" alt="Card image cap">' +
    //     '    <a href="#!">' +
    //     '      <div class="mask rgba-white-slight"></div>' +
    //     '    </a>' +
    //     '  </div>' +
    //     '  <div class="card-body card-body-cascade text-center">' +
    //     '    <h4 class="card-title"><strong>'+evenements[i].typeAnimal+'</strong></h4>'+
    //     '    <h6 class="font-weight-bold indigo-text py-2">' + evenements[i].date +', '+ evenements[i].heuredeb + ' - ' + evenements[i].heurefin+'</h6>'+
    //     '<p class="card-text">'+evenements[i].typeEvenement+' - '+evenements[i].tarif+'</p>'+
    //     '    <a class="px-2 fa-lg li-ic"><input type="submit" name="'+i+'" value="Supprimer"></a>'+
    //     '    <a class="px-2 fa-lg tw-ic"><input type="submit" name="'+i+'" value="Modifier"></a>' +
    //     '</div>'
    // );
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

$("#insertEvenement").on('submit', function (event) {
    event.preventDefault();

    let date = new Date($("#date").val());
    let mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    var resDate = date.getDate() + " " + mois[date.getDay()] + " " + date.getFullYear();


    evenement = new Evenement($("#typeAnimaux").val(), $("#img").val(), resDate, $("#heuredeb").val(), $("#heurefin").val(), $('#typeevent').val(), $("#tarif").val());

    evenements.push(evenement);

    $("table").empty();
    afficher_tableau();
});

$("input[value='Supprimer']").on('click', function (event) {
    event.preventDefault();

    evenements.splice(this.id, 1);
    $("table").empty();
    afficher_tableau();
})
