//Create variables here
var dog , happyDog,foodS,foodStock,database
function preload()
{
  //load images here
  happyDog = addImage("dog",images/dogImg1.png);
  happyDog = addImage("dog",images/dogImg.png);
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog = loadImage("dog,happyDog");
  database = firebase.database();
  foodS = database.ref('Food');
  
}


function draw() {  

  drawSprites();
  //add styles here

}



