// ----------- 笔刷-钢笔 ---------------------- //
var SoftBrRadius = 60.0;
var SoftBrPower = 1;
var SoftBrValueX;
var SoftBrValueY;
var SoftBrValueZ;


function Init_SoftBrush()
{
	SoftBrValueX = 0;
	SoftBrValueY = 0;
	SoftBrValueZ = 0;
}

var isSoftBrushPainting = false;
var prevTimeSoftBr;
function SoftBrushStartPaint()
{
	prevTimeSoftBr = millis()/1000;
	isSoftBrushPainting = true;
}
function SoftBrushPaint()
{
	print("SoftBrushPaint");
	var nowTime = millis()/1000;
	var dt = constrain(nowTime - prevTimeSoftBr, 0,1);
	var brValue3 = createVector(SoftBrValueX,SoftBrValueY,SoftBrValueZ);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var ij2TFFcnTxt = "var TF2D = " + ij2TFFcn + "(i,j);"
			eval(ij2TFFcnTxt);

			var pos = createVector(TF2D.x, TF2D.y);
			var mousePos = createVector(mouseX,mouseY);
			var mouse2Pos = p5.Vector.sub(pos,mousePos);
			var length = mouse2Pos.mag();

			if(length<=SoftBrRadius)
			{
				var len01 = length/SoftBrRadius;
				var len01T = map(len01,0,1,1,0);
				var lerpT = dt * SoftBrPower * len01T;
				//print("len01:" + len01);
				var v = Values[i][j];
				var v2 = p5.Vector.lerp(v,brValue3,lerpT);
				Values[i][j] = v2;
			}
		}
	}
	prevTimeSoftBr = nowTime;
}

function SoftBrushEndPaint()
{
	isSoftBrushPainting = false;
}

function SoftBrushDisp()
{
	if(isSoftBrushPainting)
	{
		var brDiameter = 2*SoftBrRadius;
		push();
		fill(0,0);
		strokeWeight(1);
		stroke(0);
		ellipse(mouseX,mouseY,brDiameter,brDiameter);
		stroke(255);
		ellipse(mouseX,mouseY,brDiameter+2,brDiameter+2);
		pop();
	}
}


