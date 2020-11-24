var database;

var GS;
var PC;

function setup(){
  database = firebase.database();
  
  createCanvas(500,500);

  
}

function draw(){
  background("white");
  
    
    drawSprites();
  
}

