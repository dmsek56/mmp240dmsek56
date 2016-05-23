var speed=0.1;
function setup(){
 createCanvas(640, 480);
 background("white");
  
   
 translate(width/2, height/2);
}
function draw(){
   
    rotate(frameCount *speed);
  rect(0, 0, 40, 40);
  ellipse(100,100,40,40);

}