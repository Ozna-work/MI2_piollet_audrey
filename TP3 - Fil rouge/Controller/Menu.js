$(".deroulant").append('<ul class="sous-categorie"></ul>')

for (var i = 0; i < sousMenu.length; ++i) {
    $(".sous-categorie").append('<li><a href="#">' + sousMenu[i].nomSousMenu + '</a></li>')
}

