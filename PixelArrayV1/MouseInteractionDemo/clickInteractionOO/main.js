
var interactor;
// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);

	// 在程序开始时，创建一个ClickInteracter，用于检测鼠标Click交互行为
	interactor = new ClickInteracter(
		13, // 边界半径
		2, // ”揉“的判定阈值，阈值越大，越不容易触发”揉“
		0.3, // “停留”的判定阈值，单位秒，操作时间超过阈值，则判定发生了“停留”
		ClickRelease, // 后面6个分别对应六种Click操作，这6个函数见本文件末
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
	textSize(16);
	//text('word', 10, 30);
	text(dispText,20,60);
	//text("hahahah",20,60);
	pop();
	
}

function mouseMoved()
{
	interactor.mouseMoved();
}

function mousePressed()
{
	interactor.mousePressed();
}

function mouseDragged() {
	interactor.mouseDragged();
}


function mouseReleased()
{
	interactor.mouseReleased();
}

function mouseClicked()
{
	interactor.mouseClicked();
}

// -------- 这里定义了6个函数，用于测试ClickInteracter的6种点击操作 ------------
var dispText = "T_T";
function ClickRelease(msg)
{
	dispText= "ClickRelease";
	addMsgTxtToDispTxt(msg);
	print("ClickRelease");
}

function ClickStayRelease(msg)
{
	dispText = "ClickStayRelease";
	addMsgTxtToDispTxt(msg);
	print("ClickStayRelease");
}

function ClickFlipRelease(msg)
{
	dispText = "ClickFlipRelease";
	addMsgTxtToDispTxt(msg);
	print("ClickFlipRelease");
}

function ClickStayFlipRelease(msg)
{
	dispText = "ClickStayFlipRelease";
	addMsgTxtToDispTxt(msg);
	print("ClickStayFlipRelease");
}

function ClickRubRelease(msg)
{
	dispText = "ClickRubRelease";
	addMsgTxtToDispTxt(msg);
	print("ClickRubRelease");
}

function ClickRubFlipRelease(msg)
{
	dispText = "ClickRubFlipRelease";
	addMsgTxtToDispTxt(msg);
	print("ClickRubFlipRelease");
}


function addMsgTxtToDispTxt(msg)
{
	msgTxt = msg.toString();
	dispText += "\n";
	dispText += msgTxt;
}





