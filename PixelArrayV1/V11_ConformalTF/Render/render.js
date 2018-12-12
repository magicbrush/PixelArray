// ----------- 渲染整个阵列的
function RenderValues_Default()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;

	//print("hGap:" + hGap);
	
	
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var cr = eval(colorFcn + "(v);");
			var TF2D = TF2Ds[i][j];
			drawRGBPrimitive(TF2D.x,TF2D.y,TF2D.theta,TF2D.sx,TF2D.sy,cr);
		}
	}
	

	//fill(0);
	//ellipse(200,300,20,50);

}


function RenderValues_Rolling()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var TF2D = TF2Ds[i][j];
			var cr = eval(colorFcn + "(v);");

			var thetaSpd = v.x;
			var thetaAdd = thetaSpd * GetTime();
			var theta = TF2D.theta + thetaAdd;
			
			drawRGBPrimitive(TF2D.x,TF2D.y,theta,TF2D.sx,TF2D.sy,cr);
		}
	}
}


function RenderValues_Zooming()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var tNow = GetTime();
	
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var TF2D = TF2Ds[i][j];
			
			var cr = eval(colorFcn + "(v);");
			
			var va = v.array();
			var amp = map(va[0],0,1,0.6,1.2);
			var frq = map(va[1],0,1,0,6.28);
			var phz = map(va[2],0,1,0,6.28);
			
			var scl = amp * sin(frq*tNow + phz);
			var sx = TF2D.sx*scl;
			var sy = TF2D.sy* scl;

			drawRGBPrimitive(TF2D.x,TF2D.y,TF2D.theta,sx,sy,cr);
		}
	}
}

function RenderValues_Zooming()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var tNow = GetTime();
	
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var TF2D = TF2Ds[i][j];
			
			var cr = eval(colorFcn + "(v);");
			
			var va = v.array();
			var amp = map(va[0],0,1,0.6,1.2);
			var frq = map(va[1],0,1,0,6.28);
			var phz = map(va[2],0,1,0,6.28);
			
			var scl = amp * sin(frq*tNow + phz);
			var sx = TF2D.sx*scl;
			var sy = TF2D.sy* scl;

			drawRGBPrimitive(TF2D.x,TF2D.y,TF2D.theta,sx,sy,cr);
		}
	}
}

function RenderValues_Shaking()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var tNow = GetTime();
	
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var TF2D = TF2Ds[i][j];
			
			var cr = eval(colorFcn + "(v);");
			
			var va = v.array();
			var amp = map(va[0],0,1,1.2,3.6);
			var frq = map(va[1],0,1,0,12.56);
			var phz = map(va[2],0,1,0,6.28);
			var offsetDist = amp * sin(frq * tNow + phz);

			
			var shakingDir = createVector(cos(TF2D.theta), sin(TF2D.theta));

			var shakingOffset = shakingDir.mult( offsetDist );

			var x2 = TF2D.x + shakingOffset.x;
			var y2 = TF2D.y + shakingOffset.y;

			drawRGBPrimitive(x2,y2,TF2D.theta,TF2D.sx,TF2D.sy,cr);
			
		}
	}
}

function RenderValues_Orbiting()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var tNow = GetTime();
	
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var TF2D = TF2Ds[i][j];
			
			var cr = eval(colorFcn + "(v);");
			
			var va = v.array();
			var radius = map(va[0],0,1,0.4,8);
			var angleSpd = map(va[1],0,1,0.1,9.42);
			var delay = map(va[2],0,1,0,6.28);
			var thetaAdd = angleSpd * tNow + delay;
			var theta = TF2D.theta + thetaAdd;
			var offsetX = radius * cos(theta);
			var offsetY = radius * sin(theta);
			
			var x2 = TF2D.x + offsetX;
			var y2 = TF2D.y + offsetY;
			
			drawRGBPrimitive(x2,y2,theta,TF2D.sx,TF2D.sy,cr);
		}
	}
}

function RenderValues_StepRot()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var tNow = GetTime();
	
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var TF2D = TF2Ds[i][j];
			
			var cr = eval(colorFcn + "(v);");
			var va = v.array();

			var spd = map(va[0],0,1,0,5);
			var period = map(va[1],0,1,PI,3*TWO_PI);
			var delay = period * va[2];

			var passedPeriod = tNow/period;
			var passedPeriodRound = round(passedPeriod);
			var t = passedPeriod - passedPeriodRound;
			var rotStep = PI/4;
			var rotSum = rotStep * (passedPeriodRound + thresIncrease(t,0.8));
			var theta = TF2D.theta + rotSum;
			
			drawRGBPrimitive(TF2D.x,TF2D.y,theta,TF2D.sx,TF2D.sy,cr);
		}
	}
}


