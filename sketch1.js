  function setup() {
  createCanvas(640, 480);
  background("lightgreen");
    
  var a = 10;
  var b = 15;
  var x = 100;
  var y = 250;
  var z = 350;
  blue = color(20, 75, 200); 
  yellow = color(255, 204, 0);
      
      fill(blue);
      triangle(420, 75, 330, 20, 246, 75);
      rect(230, 70, 200, 10); 
      rect(y, 80, 160, 10);
      rect(y, 90, 160, 10);
      rect(y+b, 90, 15, 210);
      rect(z+2*b, 90, 15, 210);
      rect(250, 90, 15, 20);
      rect(395, 90, 15, 20);
      rect(230, 300, 200, 10);
      rect(240, 310, 180, 10);
      rect(260, 320, 140, 30);
      rect(260, 350, 15, 20);
      rect(385, 350, 15, 20);
     
      fill(yellow);
      rect(y+2*b, x, x, x);
      rect(y+2*b, x+x, x, x);
      fill(blue);
      rect(265, 200, 130, 5);

}