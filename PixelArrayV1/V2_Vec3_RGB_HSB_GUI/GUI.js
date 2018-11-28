// ------------ GUI -----------------------//
var prevResX = 24;
var prevResY = 24;

// 图形界面
function InitGUI()
{
	var gui = createGui('Label', width+1,10);
	sliderRange(0, 48, 1);
  	//gui2.addGlobals('shape', 'label', 'radius', 'drawFill', 'fillColor');
	gui.addGlobals('resX','resY','ColorDispMode');
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