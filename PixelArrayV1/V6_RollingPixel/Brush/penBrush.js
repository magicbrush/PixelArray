// ----------- 笔刷-钢笔 ---------------------- //
var PenRadius = 60.0;
var PenPower = 1;
var PenValueX;
var PenValueY;
var PenValueZ;

function Init_PenBrush()
{
	PenValueX = 0;
	PenValueY = 0;
	PenValueZ = 0;
}

var prevTimePenBrush;
function PenBrushStartPaint()
{
	prevTimePenBrush = millis()/1000;
}
function PenBrushPaint()
{
	var nowTime = millis()/1000;
	var dt = constrain(nowTime - prevTimePenBrush, 0,1);
	var lerpT = dt * PenPower;
	var penValue3 = createVector(PenValueX,PenValueY,PenValueZ);
	
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
			
			if(length<=PenRadius)
			{
				//print("mag<=PenRadius");
				var v = Values[i][j];
				var v2 = p5.Vector.lerp(v,penValue3,lerpT);
				Values[i][j] = v2;
			}
		}
	}

	prevTimePenBrush = nowTime;
}


