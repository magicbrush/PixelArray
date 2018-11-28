// ----------- 渲染整个阵列的
function RenderValues_GraySquare()
{
	
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var val = Values[i][j];
			var x = hGap * i + hGap/2;
			var y = vGap * j + vGap/2;
			var wd = 5;
			var ht = 5;
			drawGraySquare(x,y,hGap,val);
			//rect(x,y,wd,ht);
		}
	}
	
}

