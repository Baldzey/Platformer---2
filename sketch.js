var database, form, player;
var gameState = 0;
var allPlayers;
var playerCount;
var bg, bgImg;
var dog, dogImg;


function preload(){

    bgImg = loadImage("images/e.png");
    dogImg = loadImage("images/dog.jpeg");
}


function setup(){
   
    canvas = createCanvas(displayWidth, displayHeight);
    console.log(width);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){

    if(player === 1){
        game.update(1);
    }

    if(gameState === 1){
        game.play();
    }







}