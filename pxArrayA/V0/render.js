
function renderValues_GrayDot()
{
	var gapX = width/resX;
	var gapY = height/resY;

	// 访问Values中的每个element,显示未一个灰度方块
	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var x = gapX * i + gapX/2;
			var y = gapY * j + gapY/2;
			var val = Values[i][j];

			fill(val*255);// r g b 0~255
			//rect(x,y,gapX*0.95,gapY*0.95);
			ellipse(x,y,gapX*0.9*val,gapY*0.9*val);
		}
	}
}

function renderValues_GrayRect()
{
	var gapX = width/resX;
	var gapY = height/resY;

	// 访问Values中的每个element,显示未一个灰度方块
	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var x = gapX * i + gapX/2;
			var y = gapY * j + gapY/2;
			var val = Values[i][j];

			fill(val*255);// r g b 0~255
			rect(x,y,gapX*0.95,gapY*0.95);
			//ellipse(x,y,gapX*0.9*val,gapY*0.9*val);
		}
	}
}

function renderValues_RollingGrayDot_Spd()
{
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	// 访问Values中的每个element,显示未一个灰度方块
	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var x = gapX * i + gapX/2;
			var y = gapY * j + gapY/2;
			var val = Values[i][j];

			fill(val*255);// r g b 0~255
			push();
			translate(x,y);
			rotate(val*TWO_PI*timeNow);
			ellipse(0,0,gapX*1.5*val,gapY*0.8*val);
			pop();
		}
	}
}


function renderValues_RollingGrayDot_Phase()
{
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	// 访问Values中的每个element,显示未一个灰度方块
	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var x = gapX * i + gapX/2;
			var y = gapY * j + gapY/2;
			var val = Values[i][j];

			fill(val*255);// r g b 0~255
			push();
			translate(x,y);
			rotate(timeNow+val*TWO_PI);
			ellipse(0,0,gapX*1.5*val,gapY*0.8*val);
			pop();
		}
	}
}


function renderValues_shaking_freq()
{
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	// 访问Values中的每个element,显示未一个灰度方块
	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var x = gapX * i + gapX/2;
			var y = gapY * j + gapY/2;
			var val = Values[i][j];

			fill(val*255);// r g b 0~255
			push();
			var offsetY = 20*sin(10*val*timeNow);
			translate(x,y+offsetY);
			ellipse(0,0,gapX*0.9,gapY*0.7);
			pop();
		}
	}
}


function renderValues_shaking_phase()
{
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	// 访问Values中的每个element,显示未一个灰度方块
	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var x = gapX * i + gapX/2;
			var y = gapY * j + gapY/2;
			var val = Values[i][j];

			fill(val*255);// r g b 0~255
			push();
			var offsetY = 20*sin(TWO_PI*val+5*timeNow);
			translate(x,y+offsetY);
			ellipse(0,0,gapX*0.9,gapY*0.7);
			pop();
		}
	}
}


function renderValues_shaking_phase_rolling_phase()
{
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	// 访问Values中的每个element,显示未一个灰度方块
	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var x = gapX * i + gapX/2;
			var y = gapY * j + gapY/2;
			var val = Values[i][j];

			fill(val*255);// r g b 0~255
			push();
			var offsetY = 20*sin(TWO_PI*val+5*timeNow);
			translate(x,y+offsetY);
			var rotateAngle = timeNow + val*TWO_PI;
			rotate(rotateAngle);
			ellipse(0,0,gapX*0.9,gapY*0.6);
			pop();
		}
	}
}

function renderValues_shaking_phase_rolling_spd()
{
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	// 访问Values中的每个element,显示未一个灰度方块
	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var x = gapX * i + gapX/2;
			var y = gapY * j + gapY/2;
			var val = Values[i][j];

			fill(val*255);// r g b 0~255
			push();
			var offsetY = 20*sin(TWO_PI*val+5*timeNow);
			translate(x,y+offsetY);
			var rotateAngle = 5*timeNow * val*TWO_PI;
			rotate(rotateAngle);
			ellipse(0,0,gapX*0.9,gapY*0.6);
			pop();
		}
	}
}