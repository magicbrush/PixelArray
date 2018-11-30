// ------------ GUI -----------------------//
var prevResX = 24;
var prevResY = 24;

// 图形界面
function InitGUI()
{
	var gui = createGui('Pixel Paint', width+1,10);
	sliderRange(6, 48, 1);
  	//gui2.addGlobals('shape', 'label', 'radius', 'drawFill', 'fillColor');
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