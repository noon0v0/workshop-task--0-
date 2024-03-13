let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(180, 250, 140);
  
  if(mouseX > width - 200) {
    noStroke();
    fill(100, 190, 250);
  } else {
   noStroke();
    fill(250, 200, 100)
  }
     
  // fill(150, 50, 50);
  triangle(x, 100, x + 40, 50, x + 90, 60);
  
  x = x + 1;
  
  if(x > width) {
    x = 0
  }

}  