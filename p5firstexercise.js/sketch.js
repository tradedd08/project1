function setup() {
  createCanvas(500, 500);
  background(26, 198, 250)//area where ellipse will display
}

function draw() {
  //"body" ellpise properties
  stroke('white');
  strokeWeight(5);
  fill(255, 255, 255);
  ellipse(250, 300, 150, 150);
 
 //head ellipse
  noStroke();
  fill(255);
  ellipse(255, 180, 100, 100);
  
 //"mouth"
  stroke('white'); 
  strokeWeight(4);
  fill(255, 20, 20);
  arc(255, 185, 50, 50, 0, PI);
  
  //Eye
  fill(34, 16,202);
  ellipse(255, 160, 40, 40);
  
   fill('red');
  ellipse(255, 160, 25, 15);
  
   //arm 1
  stroke(0);
  line(180, 225, 200,255)
  
   //arm 1
  stroke(0);
  line(320, 225,300,255)
  
  
  //hat 
  fill(0);
  rect (210,110, 90 ,30);
  
  fill(0);
  rect (230,80, 50 ,30);
  
  
  //shoes
  
  fill(0);
  ellipse(200,380, 50, 50);
  
  
  fill(0);
  ellipse(260,380, 50, 50);
  
  
}
