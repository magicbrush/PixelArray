// 显示数值

function RenderValues_Text()
{
	
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			
			var val = PixelValues[i][j];
			//var val = 1.0;
			
			var pos = ij2xyFcn(i,j);
			
			var x = pos.x;
			var y = pos.y;
			
			
			push();
			showText(val,x,y);
			pop();
			//showText("H", 100, 120);
		}
	}
	
}

function showText(txt, x, y)
{
	textAlign(CENTER);
	fill(0,0,0);
	text(txt,x,y);
	fill(255,255,0);
	text(txt,x-1,y-1);
}




