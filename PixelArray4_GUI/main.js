
//var myFcn;

// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);
	//initData();

	initGUI();

  	// Don't loop automatically
  	//noLoop();
}


// 函数draw()：作画阶段
function draw() {	
	
	fill(255,15);
	noStroke(); // 隐藏边线
	rect(0,0,width,height);

	if(debug)
	{
		fill(0,255);
		ellipse(200,300,100,80);
	}

/*
	KeyControl(); // 键盘控制
	dispControlKey(); // 显示控制按键
	
	renderFcn(); // 渲染像素阵列
	
	if(showValue) // 显示像素数值
	{
		RenderValues_Text();
	}
	
	BrushUpdate (); // 笔刷交互
	*/


	if(debug) 
	{
		ellipse(280,400,50,30);
	}
}






