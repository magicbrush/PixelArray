// ----------- 笔刷-喷笔 ---------------------- //
// 考虑到可能又多种类型的笔刷，因此将两个笔刷的内容都放入一个文件夹中
var SoftBrRadius = 60.0;
var SoftBrPower = 1;
var SoftBrValueX;
var SoftBrValueY;
var SoftBrValueZ;


function Init_SoftBrush()
// 笔刷上的“颜料”进行初始化
{
	SoftBrValueX = 0;
	SoftBrValueY = 0;
	SoftBrValueZ = 0;
}

var prevTimeSoftBr;
function SoftBrushStartPaint()
// prevTimeSoftBr
{
	prevTimeSoftBr = millis()/1000;
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
				var len01T = map(len01,0,1,1,0); // 距离越远，绘制“强度”越小
				var lerpT = dt * SoftBrPower * len01T;
				var v = Values[i][j];
				var v2 = p5.Vector.lerp(v,brValue3,lerpT);
				Values[i][j] = v2;
			}
		}
	}
	prevTimeSoftBr = nowTime;
}


