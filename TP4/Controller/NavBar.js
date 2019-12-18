//$("nav").append('<li><h2><a class="navbar-brand" href="Accueil.html">'+navbar.accueil+'</a></h2></li>');
$("nav").append('<div class="navbar-collapse" id="navbarSupportedContent"></div>');

$("#navbarSupportedContent").append('<ul class="navbar-nav mr-auto">');


$("#navbarSupportedContent ul").append('<li class="nav-item"><a class="nav-link" href="Accueil.html">'+navbar.accueil+'</a></li>' +
    '<li id="Menu" class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="navbarDropdownMenu" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+navbar.menu.titre+'</a></li>' +
    '<li id="Themes" class="nav-item dropdown"><a class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+navbar.themes.titre+'</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="Evenements.html">'+navbar.evenements+'</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="VisiteAudio.html">'+navbar.visiteaudio+'</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="VisiteVideo.html">'+navbar.visitevideo+'</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="Contact.html">'+navbar.contact+'</a></li>');

$("#Menu").append('<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenu"></ul>');
$("#Menu ul").append('<li><a class="dropdown-item" href="#">' + navbar.menu.connexion + '</a></li>');
$("#Menu ul").append('<li><a class="dropdown-item" href="#">' + navbar.menu.visite + '</a></li>')
$("#Menu ul").append('<li><a class="dropdown-item" href="#">' + navbar.menu.parainage + '</a></li>')
$("#Menu ul").append('<li><a class="dropdown-item"" href="#">' + navbar.menu.donation + '</a></li>')

$("#Themes").append('<ul class="dropdown-menu" aria-labelledby="navbarDropdownThemes"></ul>')
$("#Themes ul").append('<li><a class="dropdown-item" href="#">' + navbar.themes.marin + '</a></li>')
$("#Themes ul").append('<li><a class="dropdown-item" href="#">' + navbar.themes.desert + '</a></li>')
$("#Themes ul").append('<li><a class="dropdown-item" href="#">' + navbar.themes.jungle + '</a></li>')
$("#Themes ul").append('<li><a class="dropdown-item" href="#">' + navbar.themes.glace + '</a></li>')


