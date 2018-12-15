// ----------- 从 Vector 转换到色彩
function Vec2Color_RGB(p5vec)
{
	colorMode(RGB,maxValue-minValue);
	var cr = color(p5vec.x,p5vec.y,p5vec.z);
	
	return cr;
}

function Vec2Color_HSB(p5vec)
{
	colorMode(HSB,maxValue-minValue);
	var cr = color(p5vec.x,p5vec.y,p5vec.z);
	
	return cr;
}

function Vec2Color_SinGray(p5vec)
{
	var amp = map(p5vec.x,0,1,0,0.5);
	var frq = map(p5vec.y,0,1,0.5,2*TWO_PI);
	var phz = map(p5vec.z,0,1,0,TWO_PI);
	var tNow = GetTime();
	var gray = 0.5 + amp*sin(frq*tNow+phz);
	
	colorMode(RGB,maxValue-minValue);
	var cr = color(gray,gray,gray);
	return cr;
}

function Vec2Color_SinHue(p5vec)
{
	var amp = map(p5vec.x,0,1,0,0.5);
	var frq = map(p5vec.y,0,1,0.5,2*TWO_PI);
	var phz = map(p5vec.z,0,1,0,TWO_PI);
	var tNow = GetTime();
	var hue = 0.5 + amp*sin(frq*tNow+phz);
	
	colorMode(HSB,maxValue-minValue);
	var cr = color(hue,0.7,0.9);
	return cr;
}

function Vec2Color_ShiftHue(p5vec)
{
	var shiftSpd = map(p5vec.x,0,1,0,0.5);
	var delay = map(p5vec.y,0,1,0.5,2*TWO_PI);
	var bright = map(p5vec.z,0,1,0,TWO_PI);
	var tNow = GetTime();
	var hue = shiftSpd * tNow + delay;
	hue = hue - floor(hue);
	
	colorMode(HSB,maxValue-minValue);
	var cr = color(hue,0.9,bright);
	return cr;
}

function Vec2Color_ShiftRGB_Spd(p5vec)
{
	var spdR = map(p5vec.x,0,1,0,0.5);
	var spdG = map(p5vec.y,0,1,0,0.5);
	var spdB = map(p5vec.z,0,1,0,0.5);
	var tNow = GetTime();
	var r = spdR * tNow;
	r= r - floor(r);
	var g = spdG*tNow;
	g = g-floor(g);
	var b = spdB*tNow;
	b = b-floor(b);
	
	colorMode(RGB,maxValue-minValue);
	var cr = color(r,g,b);
	return cr;
}

function Vec2Color_ShiftRGB_Phase(p5vec)
{
	var phzR = map(p5vec.x,0,1,0,0.5);
	var phzG = map(p5vec.y,0,1,0,0.5);
	var phzB = map(p5vec.z,0,1,0,0.5);
	var tNow = GetTime();
	var spd = 0.5;
	var r = spd*tNow + phzR/spd;
	r= r - floor(r);
	var g = spd*tNow + phzG/spd;
	g = g-floor(g);
	var b = spd*tNow + phzB/spd;
	b = b-floor(b);
	
	colorMode(RGB,maxValue-minValue);
	var cr = color(r,g,b);
	return cr;
}

function Vec2Color_SinRGB_Freq(p5vec)
{
	var freqR = map(p5vec.x,0,1,0,0.5);
	var freqG = map(p5vec.y,0,1,0,0.5);
	var freqB = map(p5vec.z,0,1,0,0.5);
	var tNow = GetTime();
	var r = map(sin(freqR*tNow),-1,1,0,1);
	var g = map(sin(freqG*tNow),-1,1,0,1);
	var b = map(sin(freqB*tNow),-1,1,0,1);
	
	colorMode(RGB,maxValue-minValue);
	var cr = color(r,g,b);
	return cr;
}

function Vec2Color_SinRGB_Phase(p5vec)
{
	var phaseR = map(p5vec.x,0,1,0,TWO_PI);
	var phaseG = map(p5vec.y,0,1,0,TWO_PI);
	var phaseB = map(p5vec.z,0,1,0,TWO_PI);
	var tNow = GetTime();
	var r = map(sin(tNow+phaseR),-1,1,0,1);
	var g = map(sin(tNow+phaseG),-1,1,0,1);
	var b = map(sin(tNow+phaseB),-1,1,0,1);
	
	colorMode(RGB,maxValue-minValue);
	var cr = color(r,g,b);
	return cr;
}