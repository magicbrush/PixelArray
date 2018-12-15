

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
var lastDrawTime = -1;
var lastElectronPos = null;
function draw() {	

	var tNow = millis()/1000;
	if(lastDrawTime<0)
	{
		lastDrawTime = tNow;
		return;
	}

	// 图形界面的更新 GUI.js
	GUIUpdate(); 

	// 显示背景色
	colorMode(HSB,1);
	fill(bgH,bgS,bgB);
	noStroke();
	rect(0,0,width,height);

	// 更新每个像素的方位
	updateTF2Ds();

	// 滤镜
	if(filteringSpd>0)
	{
		var filterCode = filteringFcns + "()";
		//print(filterCode);
		eval(filterCode);
	}
	
	// 渲染每个像素
	var renderValueFcnTxt = renderValueFcns + "()";
	eval(renderValueFcnTxt);

	// 磁场作用：洛伦兹力
	if(renderValueFcns==="RenderValues_Magnetic")
	{
		Electrons.update(Values);
		Electrons.render();
	}
	
	// 鼠标交互
	if(mouseDown)
	{
		if (mouseMode==="brush") {
		// 绘制阵列
	      	brushPaintFcn();
			brushDispFcn();
    	}
    	else if(
    		mouseMode === "electron" && 
    		renderValueFcns === "RenderValues_Magnetic")
    	// 加入新电子
    	{
    		dt = tNow - lastDrawTime;
    		var pos = createVector(mouseX,mouseY);


    		if(lastElectronPos===null)
    		{
    			lastElectronPos = pos;
    			print("null!");
    		}
    		else
    		{
    			var move = p5.Vector.sub(pos,lastElectronPos);
    			//print("new electron move mag()" + move.mag());
    			if(move.mag()>1)
    			{
    				var vel = p5.Vector.div(move,100*dt);
	    			var sign = random(-1,1)>0?0.1:-0.1;
	    			var moveMag = move.mag();
	    			var q = constrain( moveMag * sign, -5,5);
	    			var life = 
	    				moveMag*random(0.7*electronBaseLife,0.7*electronBaseLife)+5;
	    			//life = random(3,50);
	    			
	    			Electrons.addElectron(q,pos,vel,life);
	    			lastElectronPos.set(pos.x,pos.y);
    			}
    			
    		}
    	}
	}

	// 渲染辅助信息
	dispAssistInfo();

	lastDrawTime = tNow;
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
	   		var T = doTransform(formation,i,j);
	   		//var txt = "var T = " + ij2TFFcn + "(i,j);"
			//eval(txt);
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




