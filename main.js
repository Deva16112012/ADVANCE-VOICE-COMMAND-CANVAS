x = 0;
y = 0;
screen_width=0;
screen_height=0;
draw_apple = "";
apple="";
speak_data="";
to_number="";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function preload(){
  apple=loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  to_number=Number(content);
  if(Number.isInteger(to-number)){
    console.log("Started drawing apple");
    draw_apple="set";
  }
  else{
    console.log("The speech has not recognized a number");
  }
}

function setup() {
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
  createCanvas(screen_width-150,screen_height-150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  for(var i = 1; i <= to_number; i++){
    x = Math.floor(math.random()*700);
    y = Math.floor(Math.random()* 400);
    Image(apple,x,y,50,50);
    document.getElementById("status").innerHTML=to_number+"Apples drawn";
    speak_data=to_number+"Apples Drawn";
    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
