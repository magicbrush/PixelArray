

// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);
	Init();

	InitValueFcn();
}

// 函数draw()：作画阶段
function draw() {	
	GUIUpdate(); // 图形界面的更新 GUI.js
	colorMode(HSB,1);
	fill(bgH,bgS,bgB);
	//fill(255);
	noStroke();
	rect(0,0,width,height);

	//var secs = millis()/1000;
	updateTF2Ds();
	
	var renderValueFcnTxt = renderValueFcns + "()";
	eval(renderValueFcnTxt);

	dispAssistInfo();
	
	if(mouseDown)
	{
		brushPaintFcn();
		brushDispFcn();
	}
	

	
}

function dispAssistInfo()
{
	if(dispGrid)
	{
		RenderValuesGrid();
	}
	if(dispValueText)
	{
		RenderValuesText();
	}
}

var lastUpdateTF2DTime=-1;
function updateTF2Ds()
{
	var timeNow = millis()/1000;
	if(lastUpdateTF2DTime<0)
	{
		lastUpdateTF2DTime = timeNow;
		return;
	}
	var dt = timeNow - lastUpdateTF2DTime;
	for(var i=0;i<resX;i++)
	{
	   	for(var j=0;j<resY;j++)
	   	{
	   		var txt = "var T = " + ij2TFFcn + "(i,j);"
			eval(txt);
			//TF2Ds[i][j].set(TF2D.x, TF2D.y, TF2D.theta, TF2D.sx, TF2D.sy);
			TF2Ds[i][j].lerp(T.x,T.y,T.theta,T.sx,T.sy,dt* TFLerpSpd);
	   	}
	}
	lastUpdateTF2DTime = timeNow;
}


// 初始化
function Init()
{
	// 初始化阵列数据
	InitArray();

	// 初始化函数
	InitValueFcn = InitValues_noise; // 数值初始化函数， 从Init.js中选择
	// 初始化笔刷
	InitBrushes();
	InitGUI(); // 初始化图形界面，在文件GUI.js
}

function InitBrushes () {
	Init_PenBrush();
	Init_SoftBrush();

	ChooseBrush("PenBrush");
}

var mouseDown = false;
function mousePressed()
{
	if(mouseX<width&&mouseX>=0&&mouseY<height&&mouseY>=0)
	{
		mouseDown = true;
	}
	/*
	PenBrushStartPaint();
	SoftBrushStartPaint();
	*/

	brushStartPaintFcn();
}

function mouseReleased()
{
	mouseDown = false;

	brushEndPaintFcn();
}




