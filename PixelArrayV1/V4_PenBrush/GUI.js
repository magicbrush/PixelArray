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

	sliderRange(1,200,1);
	gui.addGlobals('PenRadius');

	sliderRange(0.1,20,0.3);
	gui.addGlobals('PenPower');

	sliderRange(0,1,0.003);
	gui.addGlobals('PenValueX','PenValueY','PenValueZ');
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