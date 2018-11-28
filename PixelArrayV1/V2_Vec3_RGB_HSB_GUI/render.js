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
			//var color = color(val.x,val.y,val.z);
			//var color = color(255,0,0);
			if(ColorDispMode==="rgb")
			{
				colorMode(RGB,1);
			}
			else if(ColorDispMode === "hsb")
			{
				colorMode(HSB,1);
			}
			
			var cr = color(v.x,v.y,v.z);
			//var cr = color(v,0,1);
			drawRGBRect(x,y,hGap,vGap,cr);
			//rect(x,y,wd,ht);
		}
	}

	print("Values[5][5]:" + Values[5][5]);
	
}

