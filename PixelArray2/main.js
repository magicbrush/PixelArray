

//var myFcn;

// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);
	initData();
}

// 函数draw()：作画阶段
function draw() {	
	
	fill(255,15);
	noStroke(); // 隐藏边线
	rect(0,0,width,height);
	fill(0,255);
	ellipse(200,300,100,80);
	//var secs = millis()/1000;
	//stroke(1.0);
	renderFcn();
	RenderValues_Text();

	ellipse(280,400,50,30);
}



