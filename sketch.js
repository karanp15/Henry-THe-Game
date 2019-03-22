var person;
var sceneNum = 0; 

function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
	if(key === ' '){
    var jump = createVector(0, -18);
    person.applyForce(jump);
  } else if(key === 'p'){
  	sceneNum++;  
  }
}
 draw = function() {
	 
			if(sceneNum === 0){
				background(0,30, 50);
				fill(125,300,400);
				textSize(30);
				text("Henry Daily Rush To School" ,125,50)
        
				//Henry
        
				var henryX = 100;
				var henryY = 250;
				var henryMass = 10;
				noStroke();
				fill(224, 215, 150);
				ellipse(henryX+50, henryY-23, henryMass*5, henryMass*5); //Head
				rect(henryX+70, henryY+15, henryMass*2.5, henryMass*1.5, 3);	//Right arm
				rect(henryX+5, henryY+15, henryMass*2.5, henryMass*1.5, 3);	//Left arm
				fill(193, 217, 255);
				rect(henryX+30, henryY, henryMass*4, henryMass*6, 3); //Body
				fill(28, 72, 142);
				rect(henryX+30, henryY+60, henryMass*1.5, henryMass*4, 3); //Left leg
				rect(henryX+55, henryY+60, henryMass*1.5, henryMass*4);  //Right leg
				fill(0,0,0);
				ellipse(henryX+42, henryY-30, henryMass*0.75, henryMass*0.75); //Left eye
				ellipse(henryX+62, henryY-30, henryMass*0.75, henryMass*0.75); //Right eye
				noFill();
				stroke(0,0,0);
				strokeWeight(2);
				arc(henryX+52, henryY-15,25, 20, PI*2 , 2 * PI / 2, OPEN);
				noStroke();
				textSize(13)
				fill(0,0,0);
				text("Henry",henryX+33, henryY+20);
        
        //School
        
        var schoolX = 0;
        var schoolY = 50;
        fill(255, 72, 48);
        rect(schoolX+300,schoolY+200,200,100);
        fill(255, 106, 0)
        rect(schoolX+290,schoolY+190,220,10)
        fill(255,255,255);
        stroke(0, 97, 255);
        rect(schoolX+385,schoolY+270,40,30);        
        rect(schoolX+310,schoolY+210,20,20);
        rect(schoolX+350,schoolY+210,20,20);
        rect(schoolX+390,schoolY+210,20,20);
        rect(schoolX+430,schoolY+210,20,20);
        rect(schoolX+470,schoolY+210,20,20);
        rect(schoolX+310,schoolY+240,20,20);
        rect(schoolX+350,schoolY+240,20,20);
        rect(schoolX+390,schoolY+240,20,20);
        rect(schoolX+430,schoolY+240,20,20);
        rect(schoolX+470,schoolY+240,20,20);  
        noStroke();

        //Rules Button
        
      	var buttonX = 350;
        var buttonY = 80;
        var buttonW = 100;
        var buttonH = 50;

        fill(45, 123, 175); // start color
        if (mouseIsPressed && buttonY < mouseY && buttonY + buttonH > mouseY && buttonX < mouseX && buttonX + buttonW > mouseX) { 
          	sceneNum = sceneNum + 1;
        }
        rect(buttonX, buttonY, buttonW, buttonH,5);  // the button

        // The button text
        fill(0, 0, 0);
        textSize(30);
        text("Rules", 360, 120);
        
        //Play Button
        
        buttonX = 150;
        buttonY = 80;
        buttonW = 100;
        buttonH = 50;
        
        fill(45, 123, 175); // start color
        if (mouseIsPressed && buttonY < mouseY && buttonY + buttonH > mouseY && buttonX < mouseX && buttonX + buttonW > mouseX) { 
          	sceneNum = sceneNum + 2;
        }
        rect(buttonX, buttonY, buttonW, buttonH,5);  // the button

        // The button text
        fill(0, 0, 0);
        textSize(30);
        text("Play", 170, 120);
        
			} else if (sceneNum === 1){
				background(0);
				fill(255,255,255);
				textSize(30);
				text("How To Play",230,50)
				textSize(25);
				text("- Press The 'Space bar' To Jump ",120,130)
				text("- Avoid touching the obsticles",120,170)
				text("- Right Click to go Faster",120,210)
				text("- You can Double Jump for big obsticles",120,250)
				
        //Play Button
        
        var buttonX1 = 280;
        var buttonY1 = 280;
        var buttonW1 = 100;
        var buttonH1 = 50;
        
        fill(255,255,255); // start color
        if (mouseIsPressed && buttonY1 < mouseY && buttonY1 + buttonH1 > mouseY && buttonX1 < mouseX && buttonX1 + buttonW1 > mouseX) { 
          	sceneNum = sceneNum + 1;
        }
        rect(buttonX1, buttonY1, buttonW1, buttonH1,5);  // the button

        // The button text
        fill(0, 0, 0);
        textSize(30);
        text("Play", 300, 320);
        
			} else if (sceneNum === 2){
        
				background(6, 21, 45);
        fill(209, 236, 255);
        ellipse(90,80,135,135)
        fill(6, 21, 45);
        ellipse(110,90,115,115)
				translate(-person.pos.x,0);
				var gravity = createVector(0,1.2);
				person.applyForce(gravity);
				
				if(mouseIsPressed){
				var force = createVector(0.2,0);
				person.applyForce(force);
				}
        
        if(key==='x'){
				person.applyForce(0,0);
				}
        
				//translate(-person.pos.x,0);
					person.update();
					person.edges();
					person.display();
				
        //obticles
        
				for(var i = 500; i < 40000; i = i + 3500){
          fill(163, 219, 255);
          rect(i, height-220,100,50,10)
					rect(i+25, height-420,50,220,10);
					rect(i+1800, height-100,50,100,10);
					rect(i+2700, height-220,55,300,10); 
          rect(i+900, height-100,50,100,10);
					rect(i+900, height-400,50,100,10);
          fill(255, 242, 0);
				}
        
				fill(125,300,400);
				textSize(20);
				text("- Press P to end Game -",650,175)

			} else{
				background(0, 187, 255);
				fill(125,300,400);
        textSize(35);
				text("- THANKS FOR PLAYING -",120,175)
			}
}
