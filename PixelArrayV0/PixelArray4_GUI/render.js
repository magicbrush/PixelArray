// 这里有多个不同的渲染函数

function RenderValues_0()
{
	fill(255);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var val = PixelValues[i][j];
			var pos = ij2xyFcn(i,j);
			var x = pos.x;
			var y = pos.y;
			var theta = ij2thetaFcn(i,j);
			var wd = 20+val*18;
			var ht = 20+val*18;
			styleFcn(val);
			drawWithTransform(drawFcn, x, y, theta, wd,ht);
			//ellipse(x,y,100,30);
		}
	}
}

function RenderValues_1()
{
	fill(255);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var pos = ij2xyFcn(i,j);
			var x = pos.x;
			var y = pos.y;
			styleFcn(val);
			drawWithTransform(drawFcn, x, y);
			//ellipse(x,y,100,30);
		}
	}
}

function RenderValues_2()
{
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var val = PixelValues[i][j];
			var pos = ij2xyFcn(i,j);
			var x = pos.x;
			var y = pos.y;
			var theta = ij2thetaFcn(i,j);
			theta += val*6.28;
			var wd = 0.5*width/resX;
			var ht = (0.5+0.6*val)*height/resY;
			//fill(val*255,125+val*125,255-val*230);
			styleFcn(val);
			drawWithTransform(drawFcn, x, y, theta, wd,ht);
			//ellipse(x,y,100,30);
		}
	}
}

function RenderValues_3()
{
	var secs = millis()/1000;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var val = PixelValues[i][j];
			var pos = ij2xyFcn(i,j);
			var x = pos.x;
			var y = pos.y;
			var theta = ij2thetaFcn(i,j);
			theta += val*(6.28 +secs);
			var wd = 0.5*width/resX;
			var ht = (0.5+0.6*val)*height/resY;
			//fill(val*255,125+val*125,255-val*230);
			styleFcn(val);
			drawWithTransform(drawFcn, x, y, theta, wd,ht);
		}
	}
}

function RenderValues_4()
{
	var secs = millis()/1000;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var val = PixelValues[i][j];
			var pos = ij2xyFcn(i,j);
			var x = pos.x;
			var y = pos.y;
			var theta = ij2thetaFcn(i,j);
			theta += val*(6.28 + 3*(val+1)*secs);
			var wd = (val+0.1)*width/resX;
			var ht = (1-0.6*val)*height/resY;
			//fill(val*255,125+val*125,255-val*230);
			styleFcn(val);
			drawWithTransform(drawFcn, x, y, theta, wd,ht);
		}
	}
}

function RenderValues_4()
{
	var secs = millis()/1000;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var val = PixelValues[i][j];
			var pos = ij2xyFcn(i,j);
			var x = pos.x;
			var y = pos.y;
			var theta = ij2thetaFcn(i,j);
			theta += val*(6.28 + 3*(val+1)*secs);
			var wd = (val+0.1)*width/resX;
			var ht = (1-0.6*val)*height/resY;
			//fill(val*255,125+val*125,255-val*230);
			styleFcn(val);
			drawWithTransform(drawFcn, x, y, theta, wd,ht);
		}
	}
}

function RenderValues_5()
{
	var secs = millis()/1000;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var val = PixelValues[i][j];
			var pos = ij2xyFcn(i,j);
			var x = pos.x;
			var y = pos.y;

			var dx = mouseX-x;
			var dy = mouseY-y;

			var dist = 
				sqrt((mouseX-x)*(mouseX-x) + 
					(mouseY-y)*(mouseY-y))+1;
			
			x -= 25*dx*val/dist;
			y -= 25*dy*val/dist;

			var theta = ij2thetaFcn(i,j);
			theta += val*(6.28 + 3*(val+1)*secs);
			var wd = (val+0.1)*width/resX;
			var ht = (1-0.6*val)*height/resY;
			
			//fill(val*255,125+val*125,255-val*230);
			//ellipse(x,y,wd,ht);
			styleFcn(val);
			drawWithTransform(drawFcn, x, y, theta, wd, ht);
		}
	}
}



