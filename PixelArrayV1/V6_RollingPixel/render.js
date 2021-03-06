// ----------- 渲染整个阵列的函数 -------------------- //

// 渲染成彩色方块
function RenderValuesRect()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var txt = "var TF2D = " + ij2TFFcn + "(i,j);"
			//var TF2D = ij2TF_Rect(i,j);
			//print(txt);
			eval(txt);
			if(ColorDispMode==="rgb")
			{
				colorMode(RGB,1);
			}
			else if(ColorDispMode === "hsb")
			{
				colorMode(HSB,1);
			}
			var cr = color(v.x,v.y,v.z);
			drawRGBRect(TF2D.x,TF2D.y,TF2D.theta,TF2D.sx,TF2D.sy,cr);
		}
	}

}

// 显示成旋转的彩色方块
function RenderValuesRollingRect()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var txt = "var TF2D = " + ij2TFFcn + "(i,j);"
			
			//print(txt);
			eval(txt);
			if(ColorDispMode==="rgb")
			{
				colorMode(RGB,1);
			}
			else if(ColorDispMode === "hsb")
			{
				colorMode(HSB,1);
			}
			var cr = color(v.x,v.y,v.z);

			// 随时间旋转
			var thetaSpd = v.x;
			var thetaAdd = thetaSpd * millis()/1000;
			var theta = TF2D.theta + thetaAdd;

			drawRGBRect(TF2D.x,TF2D.y,theta,TF2D.sx,TF2D.sy,cr);
		}
	}
}

// 显示每个像素的数值
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


