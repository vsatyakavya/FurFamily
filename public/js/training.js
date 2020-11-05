var tag = document.createElement('script');


tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var secondPlayer;
var thirdPlayer;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: 'max',
        width: 'max',
        videoId: "WtgrUwkAy8E",
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    secondPlayer = new YT.Player('player1', {
        autoplay: 0,
        height: 'max',
        width: 'max',
        videoId: "X6k0zkRUt_Q",
        autoplay: 0,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    thirdPlayer = new YT.Player('player2', {
        autoplay: 0,
        height: 'max',
        width: 'max',
        videoId: "soY1HbsJDz8",
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}




        function onPlayerReady(event) {
        
    }

var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo);
            done = true;
        }
    }
    function stopVideo() {
        player.stopVideo();
    }
