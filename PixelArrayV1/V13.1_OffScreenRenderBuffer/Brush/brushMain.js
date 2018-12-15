// ----------- 笔刷控制 --------------------- //

// 笔刷
var brush = ['PenBrush','SoftBrush'];

var brushStartPaintFcn;
var brushPaintFcn;
var brushEndPaintFcn;
var brushDispFcn;


function SetBrushFcns(startFcn, paintFcn, endFcn, dispFcn)
{
	brushStartPaintFcn = startFcn;
	brushPaintFcn = paintFcn;
	brushEndPaintFcn = endFcn;
	brushDispFcn = dispFcn;
}

function ChooseBrush(brushName)
{
	if(brushName==="PenBrush")
	{
		SetBrushFcns(
			PenBrushStartPaint,
			PenBrushPaint,
			PenBrushEndPaint,
			PenBrushDisp);
	}
	else if(brushName === "SoftBrush")
	{
		SetBrushFcns(
			SoftBrushStartPaint,
			SoftBrushPaint,
			SoftBrushEndPaint,
			SoftBrushDisp);
	}
}