var gameState = 0;
var database;
var playerCount;
var form,player,game



function setup(){
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
  createCanvas(800,800);

 
}

function draw(){
  background("white");
  
  
  
}



