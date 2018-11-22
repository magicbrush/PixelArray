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
			
			var val2 = val*100;
			val2 = Math.round(val2)/100;
			
			push();
			showText(val2,x,y);
			pop();
			//showText("H", 100, 120);
		}
	}
	
}

function showText(txt, x, y)
{
	textAlign(CENTER);
	textSize(10);
	fill(0,0,0);
	text(txt,x,y);
	fill(255,255,0);
	text(txt,x-1,y-1);
}




