// ------------ GUI -----------------------//
var prevResX = 24;
var prevResY = 24;

// 区分了几个不同的界面面板：主界面、钢笔、喷笔
var guiMain;
var guiPenBr;
var guiSoftBr;
var BrushGUIs = new Array();

// 图形界面初始化
function InitGUI()
{
	// 主界面
	guiMain = createGui('Pixel Paint', width+1,10);
	sliderRange(6, 48, 1);
	guiMain.addGlobals(
		'resX',
		'resY',
		'dispValueText',
		'ColorDispMode',
		'ij2TFFcn',
		'renderValueFcns',
		'brushFcn');

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

	// 根据选中的画笔，显示对应的界面
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

// 切换界面的可见性
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
