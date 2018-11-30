
// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);

	InitValuesArray();
	gradientInitValues();
	
}

// 函数draw()：作画阶段
function draw() {
	clear();

	//noiseInitValues();
	fill(0);
	
	RenderValuesMain();
	
}

function RenderValuesMain()
{
	//RenderValues();
	//RenderValues_2();
	//RenderValues_3();
	RenderValues_EllipseRot();
	//RenderValues_EllipseRotSpd();
	//RenderValues_EllipseRotPhase();
	//RenderValues_ZoomingCircle();
	//RenderValues_LeftEye();
	//RenderValues_RightEye();
	RenderValues_Mouth();
	RenderValues_valueDisp();
}

function mousePressed()
{
	noiseInitValues();
}

