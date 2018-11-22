// ------------ draw Functions -----------------------//
/*
function drawXY_Ellipse(x,y,theta,wd,ht)
{
	push();
	translate(x,y);
	rotate(theta);
	ellipse(0,0,wd,ht);
	pop();
}

function drawXY_Tilt_Ellipse(x,y,value)
{
	var theta = value/3.14;
	var wd = 30;
	var ht = 100;
	drawXY_Ellipse(x,y,theta,wd,ht);
}
*/


function drawCircle()
{
	stroke(0);
	strokeWeight(0.02);
	ellipse(0,0,1,1);
}

function drawSquare()
{
	stroke(0);
	strokeWeight(0.02);
	rectMode(CENTER);
	rect(0,0,1,1);
}
