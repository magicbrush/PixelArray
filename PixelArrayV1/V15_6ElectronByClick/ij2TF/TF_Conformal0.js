/* --- 坐标变换，从行列号ij变换到空间坐标x,y，
	旋转角theta，以及缩放比例sx,sy ----------*/

// ----------- Conformal0 --------------------------//
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

function xy2ij_Conformal0(x,y)
{
	var x2 = (x-width/2)/100;
	var y2 = (y-height/2)/100;
	var c = new Complex({re:x2,im:y2});
	var cInv = c.pow(new Complex(0.5,0));

	var i = map(cInv.re,	0,1,	0,resX-1);
	var j = map(cInv.im,	-1,1,	0,resY-1);
	
	var ij = createVector(i,j);

	return ij;
}







