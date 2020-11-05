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
        videoId: "sisprxhsc6I",
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    secondPlayer = new YT.Player('player1', {
        height: 'max',
        width: 'max',
        videoId: "MCvrxJgy8r0",
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    thirdPlayer = new YT.Player('player2', {
        height: 'max',
        width: 'max',
        videoId: "PsNlLLSBWLU",
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