// ------------ GUI -----------------------//
// 图形界面
var prevResX = 24;
var prevResY = 24;

// 图形界面的初始化， 会在主框架的start()中调用，用于初始化图形界面
// 这里用到了GUI的库：https://github.com/bitcraftlab/p5.gui
// 用课自行下载，观看其示例程序，相当方便好用
function InitGUI()
{
	var gui = createGui('Label', width+1,10);
	sliderRange(6, 48, 1);
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