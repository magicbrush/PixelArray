// ----------- 渲染整个阵列的函数 ---------------//
function RenderValues_RGBSquare()
// 将阵列的每个像素渲染为一个RGB色彩的方块，相当于一幅RGB位图
{
	
	fill(0);
	// 计算出显示阵列中行列间距
	var hGap = width/resX;
	var vGap = height/resY;

	// 遍历所有像素，将每个像素渲染出来
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			// 获得(i,j)像素的数值
			var v = Values[i][j];
			// 计算它的显示位置x,y
			var x = hGap * i + hGap/2;
			var y = vGap * j + vGap/2;
			// 计算显示的颜色
			colorMode(RGB,1);
			var cr = color(v.x,v.y,v.z);
			// 在(x,y)绘制一个宽度为hGap，颜色为cr的方块
			drawRGBSquare(x,y,hGap,cr);
		}
	}
	
}

