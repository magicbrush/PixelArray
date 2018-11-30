// draw functions
function drawRGBRect(x,y,theta,wd,ht,rgbColor)
{
	push();
	translate(x,y);
	rotate(theta);
	scale(wd,ht);
	rectMode(CENTER);
	colorMode(RGB,maxValue);
	fill(rgbColor);
	rect(0,0,1,1);
	pop();
}