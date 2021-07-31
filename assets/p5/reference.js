var parentWidth = document.getElementById("model_01").offsetWidth;
var parentHeight = document.getElementById("model_01").offsetHeight;			
var centerPointX = parentWidth / 2;
var centerPointY = parentHeight / 2;

var xA01, yA01;
			
let radius;			
let wrench;
var fade;
var fadeAmount = 0.5;
function preload() {
  // Load model with normalise parameter set to true
  wrench = loadModel('wrench.obj', true);
}
			
function setup() {
  var canvas = createCanvas(parentWidth, parentHeight, WEBGL);
  canvas.parent('model_01');
 ellipseMode(CENTER);
 alpha = 0;
 beta = 0;
 gamma = 0;
 fade=0;
 radius=20;
 pg = createGraphics(parentWidth, parentHeight);

	

}

function draw() {
// MODEL PROPERTIES	
	
  background(0);
  noFill();
  stroke(255, fade);
  scale(4); // Scaled to make model fit into canvas
  rotateX(0);
  rotateY(0);
  rotateZ(0);
  if (fade<0) fadeAmount=0.5; 
  if (fade>10) fadeAmount=0; 
  fade += fadeAmount; 
	
  
  //  ROTATION CONTROLS  
	
    rotateX(-(mouseY-parentHeight/2)/1400);
    rotateY((mouseX-parentWidth/2)/2000);
	//rotateZ((mouseX * 0.001)); 	

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 

	rotateY(radians(gamma *0.3));
	rotateX(radians(45) - radians(beta));
}	
	
// ROTATION CONTROLS END
  model(wrench);
 push();
	
	
	//BUTTONS
	
		rotateY(0);
		stroke(255, fade+100)
	
	

	
	button01 = ellipse(-40, -100, radius, radius);
	button02 = ellipse(45, 0, radius, radius);
	button03 = ellipse(-40, 50, radius, radius);

  
	
	
	


}

			
			
window.addEventListener('deviceorientation', function(e) 
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});			
			function windowResized() {
  resizeCanvas(parentWidth, parentHeight);
}