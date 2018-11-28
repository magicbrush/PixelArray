// draw functions
function drawGraySquare(x,y,wd,gray)
{
	push();
	translate(x,y);
	scale(wd,wd);
	rectMode(CENTER);
	colorMode(RGB,maxValue);
	fill(gray);
	rect(0,0,1,1);
	pop();
}