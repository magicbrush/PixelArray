// ----------- 渲染整个阵列的函数------------- //
function RenderValues_GraySquare()
// 每个像素渲染为一个灰度方块，相当于整个阵列呈现为一幅灰度图
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
		}
	}
	
}

