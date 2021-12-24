(function($){
    play    = $('#play');

    //Song
    song    = new Audio();
    song.type= 'audio/mpeg';
    song.src='Audio/Nhac_thien_short.mp3';
})(jQuery);

play.click(function (e) {
    e.preventDefault();
    song.play();
});