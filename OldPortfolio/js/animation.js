var id = null;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*
function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      myMove(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
  */
  
function move(stop){
    var elem = document.getElementById("animate");
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        elem.style.top=getRandomInt(400)+"px";
        elem.style.left=getRandomInt(400)+"px";
        move(false);
    }
}

function exit(){return}