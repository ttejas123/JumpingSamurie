let unicorn, bImg, unicornChar;
let trains = []
function preload(){
  uImg = loadImage('charector1.png');
  bImg = loadImage('background.jpg');
  tImg = loadImage('enrgy.gif');
}
function setup() {
  createCanvas(600, 400);
  unicorn = new Unicorn();
 
}

function keyPressed(){
  if(key == ' '){
    unicorn.jump();
  }
}
function draw() {
   if(random(1) < 0.005){
    trains.push(new Train());
  }
  
  
  background(bImg);
  //for unicorn
  unicorn.show();
  unicorn.move();
  //for train
  for(let t of trains){
    t.show();
    t.move();
    if(unicorn.hits(t)){
      console.log("Game Over!");
      noLoop();
    }
  }
  
}