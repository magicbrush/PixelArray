// draw functions
function drawRGBSquare(x,y,wd,rgbColor)
{
	push();
	translate(x,y);
	scale(wd,wd);
	rectMode(CENTER);
	colorMode(RGB,maxValue);
	fill(rgbColor);
	rect(0,0,1,1);
	pop();
}