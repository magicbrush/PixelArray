// ----------- 笔刷-钢笔 ---------------------- //
var PenRadius = 60.0; // 笔刷半径
var PenPower = 1; // 笔刷强度
var PenValueX; // 笔刷上的三个数值
var PenValueY;
var PenValueZ;

function Init_PenBrush()
{
	PenValueX = 0;
	PenValueY = 0;
	PenValueZ = 0;
}

var prevTimePenBr; // 记录上一次调用PenBrushPaint()的时刻，记录每一次的时间差
function PenBrushPaint()
{
	var nowTime = millis()/1000; // 当前时刻
	var dt = constrain(nowTime - prevTimePenBr, 0,1); // 相对于上次调用此函数的时间差
	var lerpT = dt * PenPower; // 用于计算笔刷绘制效果的插值参数
	var penValue3 = createVector(PenValueX,PenValueY,PenValueZ); // 笔刷上的“颜料”数值
	
	// 遍历阵列中每一个像素，如果距离在PenRadius范围之内，
	// 则以插值方式改变其数值，插值参数正比于PenPower
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			// 获得(i,j)像素的方位 pos
			var ij2TFFcnTxt = "var TF2D = " + ij2TFFcn + "(i,j);"
			eval(ij2TFFcnTxt);
			var pos = createVector(TF2D.x, TF2D.y);

			var mousePos = createVector(mouseX,mouseY);// 鼠标位置
			var mouse2Pos = p5.Vector.sub(pos,mousePos); // 鼠标到（i，j)像素的偏移量
			var length = mouse2Pos.mag(); // （i，j)到鼠标的距离
			
			if(length<=PenRadius)
			// 当距离小于PenRadius时，改变像素的数值
			{
				print("mag<=PenRadius");
				var v = Values[i][j]; // 原来的数值
				var v2 = p5.Vector.lerp(v,penValue3,lerpT); // 绘制后的数值
				Values[i][j] = v2; // 赋值给阵列
			}
		}
	}

	prevTimePenBr = nowTime; // 记录本次函数运行时刻
}


