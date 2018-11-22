// ------------- 笔刷 ----------------------//
// ------- 参数 ------------//
var brushValue = 1.0;
var brushRadius01 = 0.27;
var brushPower = 0.1;
var brushSoftness = 1;
var screenSize = 10;

// brush prop bounds
var brushValueMin = 0;
var brushValueMax = 1;
var brushRadius01Min = 0.01;
var brushRadius01Max = 0.66;

// key control brush
var Key_IncBrushSize = '2';
var Key_DecBrushSize = '1';
var Key_IncBrushValue = '4';
var Key_DecBrushValue = '3';
var brushSizeChangeSpd = 0.0033;
var brushValueChangeSpd = 0.0033;

// -------- 笔刷的键盘控制 ------------------//
function KeyControl_Brush(key)
{
	if (key === Key_IncBrushSize) {
	   brushRadius01 += brushSizeChangeSpd;
	}
	if (key === Key_DecBrushSize) {
	   brushRadius01 -= brushSizeChangeSpd;
	}
	brushRadius01 = 
		constrain(brushRadius01,brushRadius01Min,brushRadius01Max);

	if (key === Key_IncBrushValue) {
	   brushValue += brushValueChangeSpd;
	}
	if (key === Key_DecBrushValue) {
	   brushValue -= brushValueChangeSpd;
	}
	brushValue = 
		constrain(brushValue,brushValueMin,brushValueMax);
}

// ------------ 辅助函数 ------------------------//
function GetPower(pixelPos, mousePos, screenSize)
{
	var mouse2pixel = p5.Vector.sub(mousePos,pixelPos);
	var dist = mouse2pixel.mag();
	var dist01 = dist/screenSize;

	var decayStart = brushSoftness*brushRadius01;
	var decayEnd = brushRadius01;
	var t = (dist01-decayStart)/(decayEnd-decayStart+0.001);
	t = constrain(t,0,1);
	var pwr = lerp(1,0,t);

	return pwr;
}

function IsPainting()
{
	return mouseIsPressed;
}

//---------- 笔刷更新 ----------------------//
function  BrushUpdate () {
	screenSize = sqrt(width*height);
	BrushPaint();
	BrushDisp();
}

// ---------- 笔画绘制 --------------------//
var prevTime = -1;
function BrushPaint()
{
	if(!IsPainting())
	{
		prevTime = -1;
		return;
	}

	if(prevTime<0)
	{
		prevTime = millis()/1000;
		return;
	}

	var timeNow = millis()/1000;
	var dt = timeNow - prevTime;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var pos = ij2xyFcn(i,j);

			var mousePos = createVector(mouseX,mouseY);
			
			var power = GetPower(pos,mousePos,screenSize);

			var val = lerp(PixelValues[i][j],brushValue,power*dt);
			PixelValues[i][j] = val;
		}
	}
	prevTime = timeNow;
}


// ------------ 笔刷显示 -----------------------//
function BrushDisp()
{
	push();
	noFill();
	if(IsPainting())
	{
		stroke(0,100);
		strokeWeight(1);
		var s = 2*screenSize*brushRadius01;
		ellipse(mouseX,mouseY,s,s);
	}
	else
	{
		stroke(0,5);
		strokeWeight(1);
		var s = screenSize*brushRadius01;
		ellipse(mouseX,mouseY,s,s);
	}
	pop();

	var brValueText = "BrushValue";
	brValueText += " (-/+: "+ Key_IncBrushValue + "/" + Key_DecBrushValue + "):   ";
	brValueText += Math.round(brushValue*100)/100;
	
	var brSizeText = "BrushSize";
	brSizeText += " (-/+: " + Key_IncBrushSize + "/" + Key_DecBrushSize + "):   ";
	brSizeText += Math.round(brushRadius01*100)/100;
	

	push();
	fill(0,50);
	textAlign(LEFT);
	text(brValueText,20,12);
	text(brSizeText,20,24);
	pop();

}




