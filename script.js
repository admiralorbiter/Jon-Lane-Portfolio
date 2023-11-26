document.getElementById("playButton").addEventListener("click", function() {
  var audio = document.getElementById("audioElement");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

document.addEventListener('change', function(event){
  if(event.target.name === 'theme') {
    switchTheme(event.target.value);
  }
});

function switchTheme(theme) {
  switch(theme) {
    case 'darkmode':
      document.getElementById('theme-style').href = 'darkmode.css';
      break;
    case 'lightmode':
      document.getElementById('theme-style').href = 'lightmode.css';
      break;
    default:
      document.getElementById('theme-style').href = 'style.css';
  }
}
