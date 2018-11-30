

// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);

	InitArray();
	InitValues_Random();
}

// 函数draw()：作画阶段
function draw() {	
	//fill(0);
	clear();

	rectMode(CORNERS);
	fill(0); // Set fill to gray
	rect(0,0,width,height);

	rectMode(CENTER); // Set rectMode to CENTER
	//renderValues_GrayDot();
	renderValues_GrayRect();
	renderValues_RollingGrayDot_Spd();
	//renderValues_RollingGrayDot_Phase();
	//renderValues_shaking_phase();
	//renderValues_shaking_phase_rolling_phase();
	renderValues_shaking_phase_rolling_spd();
}

