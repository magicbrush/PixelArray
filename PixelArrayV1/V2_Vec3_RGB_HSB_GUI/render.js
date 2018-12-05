// ----------- 渲染整个阵列的
function RenderValues_RGBSquare()
{
	
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];

			var x = hGap * i + hGap/2;
			var y = vGap * j + vGap/2;
			var wd = 5;
			var ht = 5;
			
			// 根据选择的模式，设置颜色模式为rgb或hsb
			if(ColorDispMode==="rgb")
			{
				colorMode(RGB,1);
			}
			else if(ColorDispMode === "hsb")
			{
				colorMode(HSB,1);
			}
			
			var cr = color(v.x,v.y,v.z);
			drawRGBRect(x,y,hGap,vGap,cr);
		}
	}

	//print("Values[5][5]:" + Values[5][5]);
	
}

