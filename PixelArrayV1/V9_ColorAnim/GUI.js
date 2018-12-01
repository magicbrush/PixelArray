// ------------ GUI -----------------------//
var prevResX = 24;
var prevResY = 24;

var guiMain;
var guiPenBr;
var guiSoftBr;
var BrushGUIs = new Array();

// 图形界面
function InitGUI()
{
	// 主界面
	guiMain = createGui('Pixel Paint', width+1,10);
	sliderRange(6, 48, 1);
	guiMain.addGlobals(
		'resX',
		'resY',
		'dispValueText');
	sliderRange(0.5, 2, 0.03);
	guiMain.addGlobals('timeScale');
	guiMain.addGlobals(
		'colorFcn',
		'ij2TFFcn',
		'renderValueFcns',
		'primitiveFcn',
		'brushFcn');
	sliderRange(0, 1, 0.003);
	guiMain.addGlobals('bgH','bgS','bgB');

	// 钢笔的界面
	guiPenBr = createGui('PenBrush', width+211,10);
	sliderRange(1,200,1);
	guiPenBr.addGlobals('PenRadius');

	sliderRange(0.1,20,0.3);
	guiPenBr.addGlobals('PenPower');

	sliderRange(0,1,0.003);
	guiPenBr.addGlobals('PenValueX','PenValueY','PenValueZ');

	// 喷笔的界面
	guiSoftBr = createGui('SoftBrush', width+211,30);
	sliderRange(1,200,1);
	guiSoftBr.addGlobals('SoftBrRadius');

	sliderRange(0.1,20,0.3);
	guiSoftBr.addGlobals('SoftBrPower');

	sliderRange(0,1,0.003);
	guiSoftBr.addGlobals('SoftBrValueX','SoftBrValueY','SoftBrValueZ');

	BrushGUIs[0] = guiPenBr;
	BrushGUIs[1] = guiSoftBr;
}

function GUIUpdate()
{
	if(prevResX !=resX || prevResY !=resY)
	{
		InitValueArray();
		InitValueFcn();
	}

	var brGUIId = 0;
	if(brushFcn === 'PenBrushPaint')
	{
		brGUIId=0;
	}
	else if(brushFcn === 'SoftBrushPaint')
	{
		brGUIId = 1;
	}

	TurnGUIsVisibleON(BrushGUIs,brGUIId);
	
	prevResX = resX;
	prevResY = resY;
}

function TurnGUIsVisibleON(GUIs, id)
{
	for(var i=0;i<GUIs.length;i++)
	{
		if(i==id)
		{
			GUIs[i].show();
		}
		else
		{
			GUIs[i].hide();
		}
	}
}
