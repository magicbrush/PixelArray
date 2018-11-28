// ************** 数据初始化 ************************//
function InitValueArray()
{
	PixelValues = new Array(resX);
	for(var i=0;i<resX;i++)
	{
	   	PixelValues[i] = new Array(resY);
	}

	renderFcn = RenderValues_5;
}

function initPixelValues()
{
	for(var i=0;i<resX;i++)
	{
	   	for(var j=0;j<resY;j++)
	   	{
	   		PixelValues[i][j] = (i+j)/(resX+resY);
	   	}
	}
}



