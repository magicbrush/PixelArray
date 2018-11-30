
function RenderValues()
{
	rectMode(CENTER);
	var gapX = width/resX;
	var gapY = height/resY;

	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			var x = gapX * i +gapX/2;
			var y = gapY * j + gapY/2;

			fill(255*Values[i][j]);
			rect(x,y,gapX*0.95,gapY*0.95);	
		}
	}
}

function RenderValues_2()
{
	rectMode(CENTER);
	var gapX = width/resX;
	var gapY = height/resY;

	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			var x = gapX * i +gapX/2;
			var y = gapY * j + gapY/2;

			var val = Values[i][j]*255;

			fill(val,255-val,0);
			rect(x,y,gapX*0.95,gapY*0.95);	
		}
	}
}

function RenderValues_Ellipse()
{
	rectMode(CENTER);
	var gapX = width/resX;
	var gapY = height/resY;

	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			var x = gapX * i +gapX/2;
			var y = gapY * j + gapY/2;

			var val = Values[i][j]*255;

			fill(val,255-val,0);
			ellipse(x,y,gapX*0.95,gapY*0.75)	
		}
	}
}

function RenderValues_EllipseRot()
{
	rectMode(CENTER);
	var gapX = width/resX;
	var gapY = height/resY;

	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			var x = gapX * i +gapX/2;
			var y = gapY * j + gapY/2;

			var val = Values[i][j]*255;

			fill(val,255-val,0);
			push();
			translate(x,y);
			rotate(val);
			ellipse(0,0,gapX*0.95,gapY*0.75);
			pop();	
		}
	}
}

function RenderValues_EllipseRotSpd()
{
	rectMode(CENTER);
	var gapX = width/resX;
	var gapY = height/resY;

	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			var x = gapX * i +gapX/2;
			var y = gapY * j + gapY/2;

			var val = Values[i][j]*255;

			fill(val);
			push();
			translate(x,y);
			rotate(0.1*val*millis()/1000);
			ellipse(0,0,gapX*0.95,gapY*0.75);
			pop();	
		}
	}
}


function RenderValues_EllipseRotPhase()
{
	rectMode(CENTER);
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			var x = gapX * i +gapX/2;
			var y = gapY * j + gapY/2;

			var val = Values[i][j]*255;

			fill(val);
			push();
			translate(x,y);
			rotate(5*timeNow + val);
			ellipse(0,0,gapX*0.95,gapY*0.75);
			pop();	
		}
	}
}

function RenderValues_ZoomingCircle()
{
	rectMode(CENTER);
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			var x = gapX * i +gapX/2;
			var y = gapY * j + gapY/2;

			var val = Values[i][j];

			fill(255);
			push();
			translate(x,y);
			var scl = map(val,0,1,0.8,1.0);
			scale(scl,scl,1);
			ellipse(0,0,gapX,gapX);
			pop();	
		}
	}
}


function RenderValues_LeftEye()
{
	rectMode(CENTER);
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			var x = gapX * i +gapX/2;
			var y = gapY * j + gapY/2;

			var val = Values[i][j];

			fill(val*255);
			push();
			translate(x-gapX*0.25,y-gapY*0.1);
			rotate(val*timeNow*3);
			ellipse(0,0,gapX*0.33,gapX*0.24);
			pop();	
		}
	}
}


function RenderValues_RightEye()
{
	rectMode(CENTER);
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			var x = gapX * i +gapX/2;
			var y = gapY * j + gapY/2;

			var val = Values[i][j];

			fill(val*255);
			push();
			translate(x+gapX*0.25,y-gapY*0.1);
			rotate(val*3+timeNow*1.5);
			ellipse(0,0,gapX*0.33,gapX*0.24);
			pop();	
		}
	}
}


function RenderValues_Mouth()
{
	rectMode(CENTER);
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			var x = gapX * i +gapX/2;
			var y = gapY * j + gapY/2;

			var val = Values[i][j];

			fill(255,0,0);
			push();
			translate(x,y+gapY*0.25);
			var scl = map(sin(15*val*timeNow),-1,1,0.7,1.2);
			scale(scl,scl,1);
			ellipse(0,0,gapX*0.33,gapX*0.24);
			pop();	
		}
	}
}

function RenderValues_valueDisp()
{
	rectMode(CENTER);
	var gapX = width/resX;
	var gapY = height/resY;

	var timeNow = millis()/1000;

	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			var x = gapX * i +gapX/2;
			var y = gapY * j + gapY/2;

			var val = Values[i][j];

			fill(0,0,0);
			push();
			translate(x,y);
			var valDisp = round(val*100);
			text(valDisp,0,0);
			pop();	
		}
	}
}