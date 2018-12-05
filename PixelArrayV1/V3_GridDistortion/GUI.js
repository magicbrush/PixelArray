// ------------ GUI -----------------------//
var prevResX = 24;
var prevResY = 24;

// 图形界面
function InitGUI()
{
	var gui = createGui('Pixel Paint', width+1,10);
	sliderRange(6, 48, 1);
	// 在GUI中增加了切换坐标变换函数的项 ij2TFFcn
	gui.addGlobals('resX','resY','ColorDispMode','ij2TFFcn');
}

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