
// 动作记录
var startPos; // 点下的位置  p5.Vector
var prevPos; // 上次拖拽的位置
var startTime; // 点下的时刻

// 过程积累量
//var trace = new Array(); // 从点下到释放的整个轨迹记录
var dist; // 从点下到释放的距离
var sumDist; // 从点下开始积累的路程
var duration; // 点下到释放的总时长

// 动作判定参数
var boundRadius = 12; // 边界半径
var rubThres = 2.5// 揉的判定阈值
var timeThres = 0.35; // 轻点/按住 的时间阈值

// 从点到释放产生的多种可能的指令
var ClickReleaseFcn;
var ClickStayReleaseFcn;
var ClickFlipReleaseFcn;
var ClickStayFlipReleaseFcn;
var ClickRubReleaseFcn;
var ClickRubFlipReleaseFcn;


function linkFcns(cr,csr,cfr,csfr,cbr,cbfr)
{
	ClickReleaseFcn = cr;
	ClickStayReleaseFcn = csr;
	ClickFlipReleaseFcn = cfr;
	ClickStayFlipReleaseFcn = csfr;
	ClickRubReleaseFcn = cbr;
	ClickRubFlipReleaseFcn = cbfr;
}



function mouseMoved()
{
	print("mouseMoved");
}

function mousePressed()
{
	startPos = createVector(mouseX,mouseY);
	prevPos = startPos;
	startTime = GetTimeSec();

	dist = 0;
	sumDist = 0;
	duration = 0;

	//print("mousePressed");
}

function mouseDragged() {
	dragged();

	//print("dist:" + dist);
  	//print("mouseDragged");
}


function mouseReleased()
{
	dragged();

	var bMoveOut = dist>=boundRadius;
	var bStay = duration > timeThres;
	var bRubbed = (sumDist/dist)>rubThres;

	if(!bMoveOut && !bStay && !bRubbed)
	// 轻点
	{
		ClickReleaseFcn();
	}
	else if(!bMoveOut && bStay && !bRubbed)
	{
		ClickStayReleaseFcn();
	}
	else if(bMoveOut && !bStay && !bRubbed)
	{
		ClickFlipReleaseFcn();
	}
	else if(bMoveOut && bStay && !bRubbed)
	{
		ClickStayFlipReleaseFcn();
	}
	else if(!bMoveOut && bRubbed)
	{
		ClickRubReleaseFcn();
	}
	else if(bMoveOut && bRubbed)
	{
		ClickRubFlipReleaseFcn();
	}

	//print("mouseReleased");
}

function mouseClicked()
{
	//print("mouseClicked");
}

function dragged()
{
	var pos = createVector(mouseX,mouseY);
	
	var move = p5.Vector.sub(pos,prevPos);
	var d = move.mag();

	var offset = p5.Vector.sub(pos,startPos);

	dist = offset.mag();
	sumDist += d;
	duration = GetTimeSec()-startTime;
  
  	prevPos = pos;
}



// --------- assists ------------- //
function GetTimeSec()
{
	return millis()/1000;
}