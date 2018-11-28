// ----------- draw ------------------------//
function drawWithTransform(drawFcn,posX,posY,theta,scaleX,scaleY)
{
	if(arguments.length<6)
	{
		scaleY = 1;
	}
	if(arguments.length<5)
	{
		scaleX = 1;
	}
	if(arguments.length<4)
	{
		theta = 0;
	}

	push();
	translate(posX,posY);
	rotate(theta);
	scale(scaleX,scaleY);
	drawFcn();
	pop();
}



