function setup() {
  createCanvas(700, 700);
   background(194,172,140);
}

function draw() {
 
  
  //large circle
  noStroke();
	fill(200,185,165, 100);
  ellipse(mouseX, mouseY, 35, 35, 100);

  //line drawings of circles
	fill(0);
  stroke(80);
  ellipse(400,300, 20);
  noFill();
  stroke(50);
  ellipse(400,300, 30);
  noFill();
  stroke(50);
  ellipse(400,300, 40);
  noFill();
  stroke(50);
  ellipse(400,300, 50);
  noFill();
  stroke(50);
  ellipse(400,300, 60);
  noFill();
  stroke(50);
  ellipse(400,300, 70);
  noFill();
  stroke(50);
  ellipse(400,300, 80);
  noFill();
  stroke(50);
  ellipse(400,300, 90);
  noFill();
  stroke(50);
  ellipse(400,300, 100);
  noFill();
  stroke(50);
  ellipse(400,300, 110);
  noFill();
  stroke(50);
  ellipse(400,300, 120);
  noFill();
  stroke(50);
  ellipse(400,300, 130);
  noFill();
  stroke(50);
  ellipse(400,300, 140);
  noFill();
  stroke(50);
  ellipse(400,300, 150);
  noFill();
  stroke(50);
  ellipse(400,300, 160);
  noFill();
  stroke(50);
  ellipse(400,300, 170);
  noFill();
  stroke(50);
  ellipse(400,300, 180);
  
  //peach colored lines
  stroke(250, 100,0);
  line(230,500, 340,380);
  line(230, 500, 280, 550);
  
  //larger quad
  stroke(0);
  fill(0);
  quad(342, 400, 320, 500, 280, 550, 320, 410);
  
  //blue colored lines
  stroke(0,0,255);
  line(280, 550, 320, 500);
  line(320,500, 260, 430);
  line(260, 430, 320, 370);
  
  //small quad
  stroke(0);
  fill(0);
  quad(260, 430, 290, 380, 270, 390, 230, 440)
}

function mousePressed() {
     background(225,50,140);
}