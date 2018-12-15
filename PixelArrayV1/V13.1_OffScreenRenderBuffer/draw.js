// draw functions
function drawRGBPrimitive(x,y,theta,wd,ht,rgbColor)
{
	push();
	translate(x,y);
	rotate(theta);
	scale(wd,ht);
	colorMode(RGB,maxValue);
	fill(rgbColor);
	var primitiveText = primitiveFcn + "();";
	eval(primitiveText);
	pop();
}
