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
			colorMode(RGB,1);
			var cr = color(v.x,v.y,v.z);
			//var cr = color(v,0,1);
			drawRGBSquare(x,y,hGap,cr);
			//rect(x,y,wd,ht);
		}
	}
	
}

