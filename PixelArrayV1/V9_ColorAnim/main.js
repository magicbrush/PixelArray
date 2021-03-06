



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

	var renderValueFcnTxt = renderValueFcns + "()";
	eval(renderValueFcnTxt);

	//fill(0);
	//ellipse(200,200,50,80);
	
	if(dispValueText)
	{
		RenderValuesText();
	}
	
	if(mouseDown)
	{
		var brFcnText = brushFcn + "();";
		eval(brFcnText);
	}
	
}


// 初始化
function Init()
{
	// 初始化阵列数据
	InitValueArray();

	// 初始化函数
	InitValueFcn = InitValues_noise; // 数值初始化函数， 从Init.js中选择
	// 初始化笔刷
	InitBrushes();
	InitGUI(); // 初始化图形界面，在文件GUI.js
}

function InitBrushes () {
	Init_PenBrush();
	Init_SoftBrush();
}

var mouseDown = false;
function mousePressed()
{
	if(mouseX<width&&mouseX>=0&&mouseY<height&&mouseY>=0)
	{
		mouseDown = true;
	}
	PenBrushStartPaint();
	SoftBrushStartPaint();
}

function mouseReleased()
{
	mouseDown = false;
}




