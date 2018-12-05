// ------------ GUI -----------------------//
// 图形界面
var prevResX = 24;
var prevResY = 24;

// 图形界面的初始化， 会在主框架的start()中调用，用于初始化图形界面
function InitGUI()
{
	var gui = createGui('Label', width+1,10);
	sliderRange(6, 48, 1);
  	//gui2.addGlobals('shape', 'label', 'radius', 'drawFill', 'fillColor');
	gui.addGlobals('resX','resY','ColorDispMode');
}

// 图形界面的更新，在主框架的draw()函数中调用，用于处理一些界面参数变化的状况
function GUIUpdate()
{
	if(prevResX !=resX || prevResY !=resY)
	{
		InitValueArray();
		InitValueFcn();
	}

	prevResX = resX;
	prevResY = resY;
}