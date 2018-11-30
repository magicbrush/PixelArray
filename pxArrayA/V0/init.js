// ----- 初始化 -----------//
function InitArray()
{
	Values = new Array();
	for(var i = 0;i<resX;i++)
	{
		Values[i] = new Array();
		for(var j=0;j<resY;j++)
		{
			Values[i][j] = 0;
		}
	}	
}

// 初始化values
function InitValues_Noise()
{
	for(var i = 0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			Values[i][j] = noise(0.1*i,0.1*j);
		}
	}	
}
	
function InitValues_Random()
{
	for(var i = 0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			Values[i][j] = random(0,1);
		}
	}	
}

