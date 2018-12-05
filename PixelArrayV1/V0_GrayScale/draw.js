// draw functions
function drawGraySquare(x,y,wd,gray) 
// 以(x,y)为中心，灰度值gray, 画一个边长为wd的矩形
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