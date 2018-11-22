
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
