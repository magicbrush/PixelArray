// ------------ GUI -----------------------//
var prevResX = 24;
var prevResY = 24;

var guiMain;
var guiDistAssist;
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
		'resY');
	sliderRange(0.5, 2, 0.03);
	guiMain.addGlobals('timeScale');
	guiMain.addGlobals(
		'colorFcn',
		'ij2TFFcn',
		'renderValueFcns',
		'primitiveFcn',
		'brush');
	sliderRange(0, 1, 0.003);
	guiMain.addGlobals('bgH','bgS','bgB');

	// 辅助显示界面
	guiDistAssist = createGui("Disp Assist", 0, height+1);
	sliderRange(0, 1, 0.003);
	guiDistAssist.addGlobals(
		'dispValueText',
		'valueTxtR',
		'valueTxtG',
		'valueTxtB',
		'valueTxtA',
		'dispGrid',
		'gridR',
		'gridG',
		'gridB',
		'gridA');


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
		InitArray();
		InitValueFcn();
	}

	var brGUIId = 0;
	if(brush === 'PenBrush')
	{
		brGUIId = 0;
		ChooseBrush("PenBrush");
	}
	else if(brush === 'SoftBrush')
	{
		brGUIId = 1;
		ChooseBrush("SoftBrush");
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
