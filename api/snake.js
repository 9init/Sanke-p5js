let snake;
let scaleValue = 20;
let canvasX = 600
let canvasY = 600
let dimensionX;
let dimensionY;
let foodLocatoin;

function setup(){
  createCanvas(canvasX, canvasY);
  snake = new Snake();
  dimensionX = floor(canvasX/scaleValue);
  dimensionY = floor(canvasY/scaleValue);
  setFoodLoc();
  frameRate(15);
}

function setFoodLoc(){
  let x = floor(random(dimensionX));
  let y = floor(random(dimensionY));
  foodLocatoin = createVector(x, y);
}

function keyPressed(){
  switch(keyCode){
    case LEFT_ARROW : {
      snake.setDir(-1, 0);
      break;
    }
    case RIGHT_ARROW : {
      snake.setDir(1, 0);
      break;
    }
    case UP_ARROW : {
      snake.setDir(0, -1);
      break;
    }
    case DOWN_ARROW : {
      snake.setDir(0, 1);
      break;
    }
  }
}

function draw(){
  noStroke();
  background(50);
  scale(scaleValue);

  if(snake.canEat(foodLocatoin)){
    setFoodLoc();
  }
  fill(255, 255, 0);
  rect(foodLocatoin.x, foodLocatoin.y, 1, 1);

  snake.update();
  snake.show();


  if(snake.gameOver()){
    background(255, 0, 0);
    noLoop();
  }
}
