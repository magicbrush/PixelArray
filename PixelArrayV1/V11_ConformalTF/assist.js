// ----------- assists -----------------//

function SetColorMode(ColorDispMode)
{
	if(ColorDispMode==="rgb")
	{
		colorMode(RGB,1);
	}
	else if(ColorDispMode === "hsb")
	{
		colorMode(HSB,1);
	}
}

function thresIncrease(t, thres)
{
	if(t<thres)
	{
		return 0;
	}
	else
	{
		var lerpT = (t-thres)/(1-thres);
		var value = lerp(0,1,lerpT);
		return value;
	}

}

function GetTime()
{
	var tNow = pow(timeScale,4) * millis()/1000;
	return tNow;
}



