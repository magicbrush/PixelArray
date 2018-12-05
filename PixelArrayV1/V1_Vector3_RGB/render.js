// ----------- 渲染整个阵列的函数 ---------------//
function RenderValues_RGBSquare()
// 将阵列的每个像素渲染为一个RGB色彩的方块，相当于一幅RGB位图
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
			colorMode(RGB,1);
			var cr = color(v.x,v.y,v.z);
			drawRGBSquare(x,y,hGap,cr);
		}
	}
	
}

