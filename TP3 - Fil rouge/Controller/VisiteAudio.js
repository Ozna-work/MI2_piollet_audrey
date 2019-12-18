$("body div").append('<audio controls autoplay="true">' +
    '<source src="../src/baleine.mp3" type="audio/mpeg">' +
    'Your browser does not support the audio element.' +
    '</audio>')

for (var i = 0; i < visiteAudio.length; ++i) {
    $("body div").append('<a href="' + visiteAudio[i].lienAudio + '">' + visiteAudio[i].nomAudio + '</a>')
}
