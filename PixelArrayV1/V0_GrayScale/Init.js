// ------------ 阵列初始化 ---------------------------//
function InitValueArray()
{
	Values = new Array(resX);
	for(var i=0;i<resX;i++)
	{
	   	Values[i] = new Array(resY);
	}
}


// ------------ 阵列数值初始化函数 --------------------- //
function InitValues_gradient()
{
	var pixelNum = resX*resY;
	var id = 0;
	for(var i=0;i<resX;i++)
	{
	   	for(var j=0;j<resY;j++)
	   	{
	   		Values[i][j] = map(id/pixelNum,0,1,minValue,maxValue);
	   		id ++;
	   	}
	}
}

function InitValues_random01()
{
	var pixelNum = resX*resY;
	var id = 0;
	for(var i=0;i<resX;i++)
	{
	   	for(var j=0;j<resY;j++)
	   	{
	   		Values[i][j] = random(0,1);
	   		id ++;
	   	}
	}
}

function InitValues_noise()
{
	for(var i=0;i<resX;i++)
	{
	   	for(var j=0;j<resY;j++)
	   	{
	   		Values[i][j] = noise(3*i/resX,3*j/resY);
	   	}
	}
}