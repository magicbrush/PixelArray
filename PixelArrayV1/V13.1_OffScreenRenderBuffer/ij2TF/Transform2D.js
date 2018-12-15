/* --- 方位 ----------*/

function createTransform2D(x,y,theta,sx,sy)
{
	var o = new Object();
	o.x = x;
	o.y = y;
	o.theta = theta;
	o.sx = sx * pixelScale;
	o.sy = sy * pixelScale;

	o.set = function(xx,yy,ttheta,ssx,ssy){
		this.x = xx;
		this.y = yy;
		this.theta = ttheta;
		this.sx = ssx;
		this.sy = ssy;
	}

	o.lerp = function(xx,yy,ttheta,ssx,ssy,t)
	{
		this.x = lerp(this.x,xx,t);
		this.y = lerp(this.y,yy,t);
		this.theta = lerp(this.theta,ttheta,t);
		this.sx = lerp(this.sx, ssx, t);
		this.sy = lerp(this.sy, ssy, t);
	}
	
	return o;
}









