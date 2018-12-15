/* --- 坐标变换，从行列号ij变换到空间坐标x,y，
	旋转角theta，以及缩放比例sx,sy ----------*/

// ----------- Rect --------------------------//
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

function xy2ij_Rect(x,y)
{
	var hGap = width/resX;
	var vGap = height/resY;

	var i = (x-hGap/2)/hGap;
	var j = (y-vGap/2)/vGap;
	var ij = createVector(i,j);
	return ij;
}








