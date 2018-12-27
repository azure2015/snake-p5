// Snake game, a basic snake game for on browser using p5 framework

var snake;         // snake object
var scal = 20;     // used for scale
var food;         // simple variable change to object in future version

function setup() {
  frameRate(10);          // start frame rate
  createCanvas(600, 600);
  snake = new Snake();    // create snake
  pickLocation();         // create food
}

function draw() {
  background(20);
  snake.move();
  snake.show();
  snake.check();
  frameRate(10+snake.len);
  
  fill(255,0,100);
  rect(food.x,food.y,20,20);
  if(snake.eat(food)) {
    pickLocation(); 
  }
  
}

function pickLocation() {
 	var cols = floor(width/scal);
  var rows = floor(height/scal);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scal);
}


// Which key is pressed and send direction to object
function keyPressed() {
  if(keyCode === UP_ARROW) {
   	snake.direction(0,-1);
  }
  if(keyCode === DOWN_ARROW) {
   	snake.direction(0,1);
  }
 if(keyCode === LEFT_ARROW) {
   	snake.direction(-1,0);
  }
  if(keyCode === RIGHT_ARROW) {
   	snake.direction(1,0);
  }
  
}

