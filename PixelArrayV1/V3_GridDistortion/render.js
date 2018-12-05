// ----------- 渲染整个阵列的
function RenderValues_Rect()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];

			// 运用ij2TFFcn来计算出像素的方位TF2D
			// TF2D是个结构体，其数据参考ij2TF.js
			var txt = "var TF2D = " + ij2TFFcn + "(i,j);"
			eval(txt); // 将文本以代码方式执行

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


