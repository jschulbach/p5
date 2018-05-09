function setup() {
	createCanvas(windowWidth, windowHeight);
	

  w = new Walker();
  background(255);
}

function draw() {
	//adding a comment to test version control
	w.step();
	w.display();
}

class Walker {
	constructor() {
		this.x = width/2;
		this.y = height/2;
	}
	display() {
		stroke(0);
		point(this.x,this.y);
	}
	step() {
		let stepx = Math.random();
		stepx *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
		let stepy = Math.random();
		stepy *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

		this.x += stepx;
		this.y += stepy;
		
	}
}