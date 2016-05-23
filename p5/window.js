var yPos = 0.000001;
var speed =5;
function setup() {
    createCanvas(450, 380);
    frameRate(30);
}


function draw() {  // draw() loops forever, until stopped
   background("white");
   

rectMode(RADIUS);  // Set rectMode to RADIUS
fill("#e0f7ff");  // Set fill to white
rect(225, 180, 130, 130);  // Draw white rect using RADIUS mode

rectMode(CENTER);  // Set rectMode to CENTER
fill("yellow");  // Set fill to gray
rect(225, 180, 190, 190);  // Draw gray rect using CENTER mode
        
  yPos += speed;
    var r = random(-5,5);
  if (yPos < 0) {
    yPos += speed +r +200;
  } else{
      yPos -=speed +r;}
    stroke("black");
    fill("white");
    
    ellipse(yPos-10, 116, 10, 25);
    ellipse(yPos+10, 116, 10, 25);
    ellipse(yPos, 176, 55, 55);
    ellipse(yPos, 146, 45, 45);
    ellipse(yPos-30, 166, 15, 15);
    ellipse(yPos+10, 166, 15, 15);
    fill("black");
    ellipse(yPos-10, 139, 5, 10);
    ellipse(yPos+10, 139, 5, 10);
  
    
    noStroke();
    fill("pink");
    ellipse(yPos-30, 200, 30, 30);
    
    ellipse(yPos+40, 200, 40, 40);
     ellipse(yPos+10, 250, 40, 40);
    ellipse(yPos+30, 230, 40, 40);
    ellipse(yPos+60, 235, 20, 20);
      ellipse(yPos-50, 230, 40, 40);
   
    arc(yPos, 200, 100, 80, 0, PI);
    ellipse(yPos-50, 200, 40, 40);
   
    ellipse(yPos+10, 210, 40, 40);
 
    
   var str ="DAEUN"
   
    colorMode(HSB);
    fill("#959595");
    strokeWeight(5);
    stroke("Black");
    textStyle(BOLD);
    textSize(100);
    text(str,60,200);
     
     
}
  