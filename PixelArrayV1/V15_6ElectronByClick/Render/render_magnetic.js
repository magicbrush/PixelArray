// ----------- 渲染为磁场

function RenderValues_MagneticElectronic()
{
	RenderValues_Electronic();
	RenderValues_Magnetic();
}

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

function RenderValues_Electronic()
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
			var E = createVector(
				map(v.y,minValue,maxValue,-1,1),
				map(v.z,minValue,maxValue,-1,1));
			var TF2D = TF2Ds[i][j];
			drawE(E,TF2D.x,TF2D.y,size,size);
			//drawRGBPrimitive(TF2D.x,TF2D.y,TF2D.theta,TF2D.sx,TF2D.sy,cr);
		}
	}
}

function drawB(B, x,y,sx,sy)
{
	var h = 0;
	var s = 1;
	var b = bgB+0.5;
	var a = EBFieldAlpha * (0.2+abs(B)*0.8);
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
}

function drawE(E, x,y,sx,sy)
{
	var h = 0.33;
	var s = 1;
	var b = bgB+0.5;

	var EMag = E.mag();
	//print("EMag:" + EMag);

	var a = EBFieldAlpha * (0.1+EMag*0.6);
	//print("a:" + a);
	if(b>1.0)
	{
		b = b-1;
	}
	b = constrain(b,0.3,1);
	colorMode(HSB,1);

	var DrawFcn = primitive_arrow;
	var sclX = sx * pixelScale * EMag;
	var sclY = sy * pixelScale * EMag;

	push();
	fill(h,s,b,a);
	translate(x,y);
	scale(sclX,sclY);
	rotate(E.heading());
	DrawFcn();
	pop();

}


