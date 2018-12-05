/* --- 坐标变换，从行列号ij变换到空间坐标x,y，
	旋转角theta，以及缩放比例sx,sy ----------*/
function ij2TF_Rect(i,j)
// 根据行列号i,j变化为标准的方阵
{
	var hGap = width/resX;
	var vGap = height/resY;

	// 像素的方位
	var Transform2D = {
	  	'x': hGap * i + hGap/2, // 坐标x
	  	'y': vGap * j + vGap/2, // 坐标y
	  	'theta': 0, // 旋转角
	  	'sx': hGap, // 缩放比例 sx,sy
	  	'sy': vGap};

	return Transform2D;
};

function ij2TF_Ring(i,j)
// 根据行列号i,j变化为环形阵
{
	var size = min(width,height);
	var diameter = size*0.8;
	var boundary = (size - diameter)/2;

	var maxRadius = diameter/2;
	var minRadius = diameter * 0.2;
	var radiusInterval = maxRadius - minRadius;

	var thetaGap = TWO_PI/resX;
	var radiusGap = radiusInterval/resY;

	var RadiusJ = j*radiusGap + minRadius;
	var ThetaI = i*thetaGap;
	var offsetX = RadiusJ * cos(ThetaI);
	var offsetY = RadiusJ * sin(ThetaI);

	var x = width/2 + offsetX;
	var y = height/2 + offsetY;

	var curcum = TWO_PI * RadiusJ;
	var ht = curcum/resX;
	var wd = radiusGap*1.15;

	var Transform2D = {
	  	'x': x, 
	  	'y': y,
	  	'theta': ThetaI,
	  	'sx': wd,
	  	'sy': ht};

	return Transform2D;
};









