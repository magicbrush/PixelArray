// ************** 数据初始化 ************************//

function initData()
{
	initFunctions();
	initValueArray();
	initPixelValues();
}

function initFunctions()
{
	ij2xyFcn = ij2xy_ring; // choose from ij2xy.js
	ij2thetaFcn = ij2theta_0; // choose from ij2theta.js
	renderFcn = RenderValues_3; // choose from render.js
	drawFcn = drawSquare; // choose from drawFcn.js
	styleFcn = SetStyle_0; // choose from setStyleOnValue.js
}

function initValueArray()
{
	PixelValues = new Array(resX);
	for(var i=0;i<resX;i++)
	{
	   	PixelValues[i] = new Array(resY);
	}
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





