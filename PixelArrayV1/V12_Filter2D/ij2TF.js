/* --- 坐标变换，从行列号ij变换到空间坐标x,y，
	旋转角theta，以及缩放比例sx,sy ----------*/
function ij2TF_Rect(i,j)
{
	var hGap = width/resX;
	var vGap = height/resY;

	var tf2d = createTransform2D(
		hGap * i + hGap/2, 
		vGap * j + vGap/2, 
		0, 
		hGap, 
		vGap);

	return tf2d;
};

function ij2TF_Ring(i,j)
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

	var tf2d = createTransform2D(
		x, 
		y, 
		ThetaI, 
		wd, 
		ht);

	return tf2d;
};


function ij2TF_Conformal0(i,j)
{
	var x0 = map(i,0,resX-1,0,1);
	var y0 = map(j,0,resY-1,-1,1);

	// 通过在x,y方向取微小偏移量，计算局部的扭曲：旋转和缩放比
	var x1 = x0+ 0.001;
	var y1 = y0+ 0.001;

	var c0 = new Complex({re:x0,im:y0});
	var c1 = new Complex(x1,y0);
	var c2 = new Complex(x0,y1);

	var cc0 = c0.pow(new Complex(2,0));
	var cc1 = c1.pow(new Complex(2,0));
	var cc2 = c2.pow(new Complex(2,0));
	var cc0_cc1 = cc1.sub(cc0);
	var cc0_cc2 = cc2.sub(cc0);
	
	// 位置
	var x = cc0.re * 100 + width/2;
	var y = cc0.im * 100 + height/2;

	// 计算旋转角
	var cc0_cc1_vec = createVector(cc0_cc1.re,cc0_cc1.im);
	var theta = cc0_cc1_vec.heading();

	// 计算缩放比例
	var sx = cc0_cc1.abs()/(0.000005*resX);
	var sy = cc0_cc2.abs()/(0.000005*resY);
	

	var tf2d = createTransform2D(
		x, 
		y, 
		theta,
		sx, 
		sy);


	return tf2d;
};



function ij2TF_Conformal1(i,j)
{
	var x0 = map(i,0,resX-1,0,1);
	var y0 = map(j,0,resY-1,-1,1);

	// 通过在x,y方向取微小偏移量，计算局部的扭曲：旋转和缩放比
	var x1 = x0+ 0.001;
	var y1 = y0+ 0.001;

	var c0 = new Complex({re:x0,im:y0});
	var c1 = new Complex(x1,y0);
	var c2 = new Complex(x0,y1);

	var cc0 = c0.exp(new Complex(1,1));
	var cc1 = c1.exp(new Complex(1,1));
	var cc2 = c2.exp(new Complex(1,1));
	var cc0_cc1 = cc1.sub(cc0);
	var cc0_cc2 = cc2.sub(cc0);
	
	// 位置
	var x = cc0.re * 100 + width/4;
	var y = cc0.im * 100 + height/2;

	// 计算旋转角
	var cc0_cc1_vec = createVector(cc0_cc1.re,cc0_cc1.im);
	var theta = cc0_cc1_vec.heading();

	// 计算缩放比例
	var sx = cc0_cc1.abs()/(0.000009*resX);
	var sy = cc0_cc2.abs()/(0.000005*resY);
	

	var tf2d = createTransform2D(
		x, 
		y, 
		theta,
		sx, 
		sy);


	return tf2d;
};








