$("nav").append('<ul>' +
    '<li><h2><a class="navbar-brand" href="Accueil.html">'+navbar.accueil+'</a></h2></li>' +
    '<li id="Menu" class="deroulant"><a href="Menu.html">'+navbar.menu.titre+'</a></li>' +
    '<li id="Themes" class="deroulant"><a href="Themes.html">'+navbar.themes.titre+'</a></li>' +
    '<li><a href="Evenements.html">'+navbar.evenements+'</a></li>' +
    '<li><a href="VisiteAudio.html">'+navbar.visiteaudio+'</a></li>' +
    '<li><a href="VisiteVideo.html">'+navbar.visitevideo+'</a></li>' +
    '<li><a href="Contact.html">'+navbar.contact+'</a></li>' +
    '</ul>')

$("#Menu").append('<ul class="sous-categorie"></ul>')
$("#Menu ul").append('<li><a href="#">' + navbar.menu.connexion + '</a></li>')
$("#Menu ul").append('<li><a href="#">' + navbar.menu.visite + '</a></li>')
$("#Menu ul").append('<li><a href="#">' + navbar.menu.parainage + '</a></li>')
$("#Menu ul").append('<li><a href="#">' + navbar.menu.donation + '</a></li>')

$("#Themes").append('<ul class="sous-categorie"></ul>')
$("#Themes ul").append('<li><a href="#">' + navbar.themes.marin + '</a></li>')
$("#Themes ul").append('<li><a href="#">' + navbar.themes.desert + '</a></li>')
$("#Themes ul").append('<li><a href="#">' + navbar.themes.jungle + '</a></li>')
$("#Themes ul").append('<li><a href="#">' + navbar.themes.glace + '</a></li>')


