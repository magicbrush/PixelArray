// ----------- 渲染为磁场

function RenderValues_Magnetic()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	
	var size = min(width/resX,height/resY);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var B = map(v.x,minValue,maxValue,-1,1);
			var TF2D = TF2Ds[i][j];
			drawB(B,TF2D.x,TF2D.y,size,size);
			//drawRGBPrimitive(TF2D.x,TF2D.y,TF2D.theta,TF2D.sx,TF2D.sy,cr);
		}
	}
}


function drawB(B, x,y,sx,sy)
{

	var h = 0;
	var s = 1;
	var b = bgB+0.5;
	var a = 0.3+abs(B)*0.3;
	if(b>1.0)
	{
		b = b-1;
	}
	b = constrain(b,0.3,1);
	colorMode(HSB,1);

	var DrawFcn;
	if(B>=0)
	{
		h = 0;
		DrawFcn = primitive_circle;
	}
	else
	{
		h = 0.66;
		scl *= 1.2;
		DrawFcn = primitive_cross;
	}
	var scl = abs(B)*pixelScale;
	
	push();
	fill(h,s,b,a);
	translate(x,y);
	scale(scl*sx,scl*sy,1);
	rotate(PI/4);
	DrawFcn();
	pop();

	/*
	push();
	colorMode(RGB,1);
	fill(0,0,0);
	translate(x,y);
	scale(1,1,1);
	primitive_circle();
	pop();
	*/
}


