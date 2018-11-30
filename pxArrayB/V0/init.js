

function InitValuesArray()
{
	for(var i =0;i<resX;i++)
	{
		Values[i] = new Array();
		for(var j=0;j<resY;j++)
		{	
			Values[i][j] = 0;
		}
	}
}

function gradientInitValues()
{
	var count = resX*resY;
	var id = 0;
	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			Values[i][j] = id/count;
			id ++;
		}
	}
}

function noiseInitValues()
{
	var timeNow = millis()/1000;
	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			Values[i][j] = noise(timeNow + i*0.2,j*0.3);
		}
	}
}

function randomInitValues()
{
	for(var i =0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{	
			Values[i][j] = random(0,1);
		}
	}
}
