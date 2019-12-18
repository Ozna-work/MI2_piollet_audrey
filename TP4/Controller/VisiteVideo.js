for (var i = 0; i < visiteVideo.length; ++i) {
    $("body div").append('<video width="320" height="240" controls>' +
        '<source src="' + visiteVideo[i].lienVideo + '"type="video/mp4">' +
        'Your browser does not support the video tag.' +
        '</video>')
}

$("video:first").attr("autoplay","true");
$("video:first").attr("loop","true");
