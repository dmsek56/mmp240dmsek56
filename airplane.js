var x= 10;
var y= 20;
var speed= 0.000000001;
function setup() {
  createCanvas(640, 480);
  background("lightgreen");
}
function draw(){
    background("lightgreen");
    
  /*airplane*/
  
  airplane(x, y, 30);
  airplane(x, 400, 80);
    x+= speed;
    y+= speed;
    speed +=random(0, 2);
    if (x>width){
        x=0;
        speed=0.000001;
    }
      speed +=random(0, 2);
    if (y>width){
        y=0;
       speed=0.00001;
    }
  }
  var airplane = function(x, y, size) {
  var round = size/3;
  var round1 = size/2;
      
      
  rect(x, y-size*2, size, size*5, round1, round, round, round1);
  rect(x-6*size, y-size, round1, size*3, round1, round, round, round1);
  triangle(x-6*size, y+round1, x+round1, y, x+size/2, y+size);
      rect(x+size*2.1, y, size/7, size);
      triangle(x+size*2.5, y+round1, x+round1, y, x+size/2, y+size);
  rect(x, y, size*2, size, round1, round, round, round1);
  
}
