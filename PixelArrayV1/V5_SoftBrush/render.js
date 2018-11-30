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
			var txt = "var TF2D = " + ij2TFFcn + "(i,j);"
			//var TF2D = ij2TF_Rect(i,j);
			print(txt);
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

	//print("Values[5][5]:" + Values[5][5]);
}


