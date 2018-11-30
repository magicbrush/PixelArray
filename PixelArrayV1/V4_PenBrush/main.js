



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
	fill(255,1);
	noStroke();
	rect(0,0,width,height);

	var secs = millis()/1000;

	
	//eval(RenderValueFcn2 + "();");
	RenderValueFcn();


	if(mouseDown)
	{
		PenBrushPaint();
	}
	

	//fill(0);
	//rect(200,200,10,30);
}

// 初始化
function Init()
{
	// 初始化阵列数据
	InitValueArray();

	// 初始化函数
	InitValueFcn = InitValues_noise; // 数值初始化函数， 从Init.js中选择
	Init_PenBrush();
	//ij2TFFcn = ij2TF_Ring; // 坐标变换函数，用于扭曲网格，从ij2TF.js中选择
	RenderValueFcn = RenderValues_Rect;// 渲染函数，从render.js中选择

	InitGUI(); // 初始化图形界面，在文件GUI.js
}

var mouseDown = false;
function mousePressed()
{
	if(mouseX<width&&mouseX>=0&&mouseY<height&&mouseY>=0)
	{
		mouseDown = true;
	}
}

function mouseReleased()
{
	mouseDown = false;
}



