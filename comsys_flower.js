var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 100; i++) {
    bubble[i] = new Bubble(random(width),random(height));
  }
}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function keyPressed() {
  bubbles.splice(0, 1);
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;
  
  this.display = function() {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
  
  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
