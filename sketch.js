function setup() {
    createCanvas(685, 685);
    background("white");
    

    var size= 40;
    var space = size*2
    
    for(var x =50; x <=width; x +=space){
        for(var y=50; y<height; y +=space){
            var r= random(0,255);
            var g = random(0,255);
            var b = random(0,255);
            
           
            strokeWeight(0);
            fill (r,g,b);
       
            triangle(x, y, x+20, y+20, x+50, x+50);
             triangle(y, x, y+20, x+20, x+50, y+50);
            
    
    }
}
}
    
