document.getElementById("playButton").addEventListener("click", function() {
  var audio = document.getElementById("audioElement");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});