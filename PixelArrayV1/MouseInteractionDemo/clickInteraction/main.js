

// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);

	linkFcns(
		ClickRelease,
		ClickStayRelease,
		ClickFlipRelease,
		ClickStayFlipRelease,
		ClickRubRelease,
		ClickRubFlipRelease);
	
}

// 函数draw()：作画阶段
function draw() {	
	fill(255,255);
	noStroke();
	rect(0,0,width,height);

	fill(0);
	//ellipse(200,300,50,80);
	
	push();
	textAlign(LEFT);
	stroke(255,0,0);
	fill(0,0,255);
	textSize(48);
	//text('word', 10, 30);
	text(dispText,20,60);
	//text("hahahah",20,60);
	pop();
	
}

var dispText = "T_T";
function ClickRelease()
{
	dispText= "ClickRelease";
	print("ClickRelease");
}

function ClickStayRelease()
{
	dispText = "ClickStayRelease";
	print("ClickStayRelease");
}

function ClickFlipRelease()
{
	dispText = "ClickFlipRelease";
	print("ClickFlipRelease");
}

function ClickStayFlipRelease()
{
	dispText = "ClickStayFlipRelease";
	print("ClickStayFlipRelease");
}

function ClickRubRelease()
{
	dispText = "ClickRubRelease";
	print("ClickRubRelease");
}

function ClickRubFlipRelease()
{
	dispText = "ClickRubFlipRelease";
	print("ClickRubFlipRelease");
}






