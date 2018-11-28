// draw functions
function drawRGBRect(x,y,wd,ht,rgbColor)
{
	push();
	translate(x,y);
	scale(wd,ht);
	rectMode(CENTER);
	colorMode(RGB,maxValue);
	fill(rgbColor);
	rect(0,0,1,1);
	pop();
}