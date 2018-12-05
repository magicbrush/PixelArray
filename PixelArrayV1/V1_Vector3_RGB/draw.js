// draw functions
function drawRGBSquare(x,y,wd,rgbColor)
// 画一个RGB彩色的小方块，中心在(x,y),宽度wd, 颜色为rgbColor(rgb模式)
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