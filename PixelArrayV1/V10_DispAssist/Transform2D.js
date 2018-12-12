/* --- 方位 ----------*/

function createTransform2D(x,y,theta,sx,sy)
{
	var o = new Object();
	o.x = x;
	o.y = y;
	o.theta = theta;
	o.sx = sx;
	o.sy = sy;

	o.set = function(xx,yy,ttheta,ssx,ssy){
		this.x = xx;
		this.y = yy;
		this.theta = ttheta;
		this.sx = ssx;
		this.sy = ssy;
	}
	
	return o;
}









