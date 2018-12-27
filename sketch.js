var snake;
var scal = 20;

var food;

function setup() {
  frameRate(10);
  createCanvas(600, 600);
  snake = new Snake();
  pickLocation();
 // food = createVector(random(width),random(height));
}

function draw() {
  background(20);
  snake.move();
  snake.show();
  snake.check();
  
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


class Snake {
  
 constructor() {
  this.x = 300;
  this.y = 300;
  this.dx = 1;
  this.dy = 0;
  this.len= 0;  // starts array at zero
  this.tail = []; 
  this.scl = 20;
 }
  
 move() {
  if(this.len === this.tail.length) { 
  	for(var i= 0; i<this.len-1;i++) {
     	this.tail[i] = this.tail[i+1];
   	}
 }
  this.tail[this.len-1] = createVector(this.x,this.y);
   
   
   this.x +=(this.dx * this.scl);
   this.y +=(this.dy * this.scl);
   
   this.x = constrain(this.x,0,width-this.scl);
   this.y = constrain(this.y,0,height-this.scl);
   
  
 }
  
 direction(x,y) {
   this.dx = x;
   this.dy = y;
 }
  
 eat(foodPos) {
  var d =dist(this.x,this.y,foodPos.x,foodPos.y)
  if(d< 1) {
    this.len++;
    return true;
  } else {
    return false; 
  }
   
   
 }
 
 check() {
  for(var i =0; i<this.len; i++) {
    	var pos = this.tail[i];
      var d = dist(this.x,this.y,pos.x,pos.y)
      if (d <1 ) {
        this.len =0;
        this.tail = [];
   		}
  }
 }
   
 show() {
   fill(200);
   for(var i =0; i<this.len; i++) {
    	rect(this.tail[i].x,this.tail[i].y,20,20); 
   }
   rect(this.x,this.y,20,20); 
 }
  
}
