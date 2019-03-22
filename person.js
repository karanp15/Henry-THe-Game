function Person() {
  this.pos = createVector(50, 250);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  this.background = createVector(0, 0);
  this.mass = 10;
  this.applyForce = function(force) {
  this.acc.add(force);
  }
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  this.display = function() {
    
    //Henry
    
    noStroke();
    fill(224, 215, 150);
    ellipse(this.pos.x+50, this.pos.y-23, this.mass*5, this.mass*5); //Head
    rect(this.pos.x+70, this.pos.y+15, this.mass*2.5, this.mass*1.5, 3);	//Right arm
    rect(this.pos.x+5, this.pos.y+15, this.mass*2.5, this.mass*1.5, 3);	//Left arm
    fill(193, 217, 255);
    rect(this.pos.x+30, this.pos.y, this.mass*4, this.mass*6, 3); //Body
    fill(28, 72, 142);
    rect(this.pos.x+30, this.pos.y+60, this.mass*1.5, this.mass*4, 3); //Left leg
    rect(this.pos.x+55, this.pos.y+60, this.mass*1.5, this.mass*4);  //Right leg
    fill(0,0,0);
    ellipse(this.pos.x+42, this.pos.y-30, this.mass*0.75, this.mass*0.75); //Left eye
    ellipse(this.pos.x+62, this.pos.y-30, this.mass*0.75, this.mass*0.75); //Right eye
  	noFill();
    stroke(0,0,0);
    strokeWeight(2);
    arc(this.pos.x+52, this.pos.y-15,25, 20, PI*2 , 2 * PI / 2, OPEN);
    noStroke();
    textSize(13)
    fill(0,0,0);
    text("Henry",this.pos.x+33, this.pos.y+20);
    
  }
  this.edges = function() {
    if (this.pos.y > 250) {
      this.vel.y *= 0;
      this.pos.y = 250;
    }
  }
}
