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
// 阵列中的每个元素都初始化为一个Vector（矢量），其概念即数学中的矢量
// 矢量运算可从p5js官网上搜索 createVector
function InitValues_gradient()
{
	var pixelNum = resX*resY;
	var id = 0;
	for(var i=0;i<resX;i++)
	{
	   	for(var j=0;j<resY;j++)
	   	{
	   		var x = map(id/pixelNum,0,1,minValue,maxValue);
	   		var y = map(id/pixelNum,0,1,maxValue,minValue);
	   		var z = (x+y)/2;

	   		Values[i][j] = createVector(x,y,z);
	   		id ++;
	   	}
	}
}

function InitValues_random01()
{
	for(var i=0;i<resX;i++)
	{
	   	for(var j=0;j<resY;j++)
	   	{
	   		var x = random(minValue,maxValue);
	   		var y = random(minValue,maxValue);
	   		var z = random(minValue,maxValue);
	   		Values[i][j] = createVector(x,y,z);
	   	}
	}
}

function InitValues_noise()
{
	for(var i=0;i<resX;i++)
	{
	   	for(var j=0;j<resY;j++)
	   	{
	   		var x = noise(2*i/resX,3*j/resY);
	   		var y = noise(4*i/resX,3*j/resY);
	   		var z = noise(3*i/resX,2*j/resY);
	   		var v = createVector(x,y,z);
	   		Values[i][j] = v;
	   	}
	}
}