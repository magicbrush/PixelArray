// ----------- 渲染整个阵列的
function RenderValues_Default()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	SetColorMode(ColorDispMode);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var txt = "var TF2D = " + ij2TFFcn + "(i,j);"
			//var TF2D = ij2TF_Rect(i,j);
			print(txt);
			eval(txt);
			var cr = color(v.x,v.y,v.z);
			drawRGBPrimitive(TF2D.x,TF2D.y,TF2D.theta,TF2D.sx,TF2D.sy,cr);
		}
	}

	//print("Values[5][5]:" + Values[5][5]);
}


function RenderValues_Rolling()
// 每个像素都在旋转
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	SetColorMode(ColorDispMode);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var txt = "var TF2D = " + ij2TFFcn + "(i,j);"
			print(txt);
			eval(txt);
			var cr = color(v.x,v.y,v.z);
			var thetaSpd = v.x;
			var thetaAdd = thetaSpd * millis()/1000;
			var theta = TF2D.theta + thetaAdd;
			//theta = v.x;

			drawRGBPrimitive(TF2D.x,TF2D.y,theta,TF2D.sx,TF2D.sy,cr);
		}
	}
}


function RenderValues_Zooming()
// 每个像素都在缩放
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var tNow = millis()/1000;
	SetColorMode(ColorDispMode);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var ij2TFFcnTXT = "var TF2D = " + ij2TFFcn + "(i,j);"
			eval(ij2TFFcnTXT);
			var cr = color(v.x,v.y,v.z);
			
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
// 每个像素都在缩放
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var tNow = millis()/1000;
	SetColorMode(ColorDispMode);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var ij2TFFcnTXT = "var TF2D = " + ij2TFFcn + "(i,j);"
			eval(ij2TFFcnTXT);
			var cr = color(v.x,v.y,v.z);
			
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
// 每个像素都在振动
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var tNow = millis()/1000;
	SetColorMode(ColorDispMode);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var ij2TFFcnTXT = "var TF2D = " + ij2TFFcn + "(i,j);"
			eval(ij2TFFcnTXT);
			var cr = color(v.x,v.y,v.z);
			
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
// 每个像素都在转圈
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var tNow = millis()/1000;
	SetColorMode(ColorDispMode);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var ij2TFFcnTXT = "var TF2D = " + ij2TFFcn + "(i,j);"
			eval(ij2TFFcnTXT);
			var cr = color(v.x,v.y,v.z);
			
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
// 每个像素按一定周期地旋转
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var tNow = millis()/1000;
	SetColorMode(ColorDispMode);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var ij2TFFcnTXT = "var TF2D = " + ij2TFFcn + "(i,j);"
			eval(ij2TFFcnTXT);
			var cr = color(v.x,v.y,v.z);

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

function RenderValuesText()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var minGap = min(hGap,vGap);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var vals = new Array();
			vals[0] = round(100*v.x);
			vals[1] = round(100*v.y);
			vals[2] = round(100*v.z);

			var ij2TFtxt = "var TF2D = " + ij2TFFcn + "(i,j);"
			eval(ij2TFtxt);

			var x = TF2D.x;
			var y = TF2D.y;

			push();
			translate(x,y);
			translate(0,-2);
			textAlign(CENTER);
			textSize(12);
			var scl = 0.02*minGap;
			scale(scl,scl);
			for(var k=0;k<3;k++)
			{
				fill(0);
				text(vals[k],0,0);
				fill(255);
				text(vals[k],-0.03*minGap,0);
				translate(0,12);
			}
			pop();
		}
	}
	
}


