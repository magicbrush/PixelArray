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


function Get8NeighborsID(i,j,resX,resY)
// 获得8个相邻像素的行列编号
{
	var nbIds = new Array();

	var iLeft = i-1;
	if(iLeft<0)
	{
		iLeft = resX-1;
	}

	var iRight = i+1;
	if(iRight>=resX)
	{
		iRight = 0;
	}

	var jUp = j-1;
	if(jUp<0)
	{
		jUp = resY;
	}

	var jDown = j+1;
	if(jDown>=resY)
	{
		jDown = 0;
	}

	nbIds[0] = createVector(iLeft,j);
	nbIds[1] = createVector(iLeft,jDown);
	nbIds[2] = createVector(i,jDown);
	nbIds[3] = createVector(iRight,jDown);
	nbIds[4] = createVector(iRight,j);
	nbIds[5] = createVector(iRight,jUp);
	nbIds[6] = createVector(i,jUp);
	nbIds[7] = createVector(iLeft,jUp);

	return nbIds;
}

function frac(value)
{
	var floorVal = floor(value);
	var fracVal = value - floorVal;
	return fracVal;
}


function repeat(value,maxValue)
{
	//return value%maxValue;

	while(value<0)
	{
		value += maxValue;
	}
	
	if(value>=maxValue)
	{
		return value%maxValue;
	}
	else
	{
		return value;
	}
	
}

function interpFromV3Array(i,j, V3Array)
{
	var i2 = repeat(i,resX);
	var j2 = repeat(j,resY);

	var it = frac(i2);
	var jt = frac(j2);

	var il = floor(i2);
	var ir = repeat(il+1,resX);

	var ju = floor(j2);
	var jd = repeat(ju+1,resY);

	//print("il:" + il + " ir:" + ir + " ju:" + ju + " jd:" + jd);

	var vUL = V3Array[il][ju];
	var vUR = V3Array[ir][ju];
	var vDL = V3Array[il][jd];
	var vDR = V3Array[ir][jd];

	//print("vUL:" + vUL + " vUR:" + vUR + " vDL:" + vDL + " vDR:" + vDR);

	var vU = p5.Vector.lerp(vUL,vUR,it);
	var vD = p5.Vector.lerp(vDL,vDR,it);

	var v = p5.Vector.lerp(vU,vD,jt);

	return v;
}


