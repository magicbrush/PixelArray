// ************** 把行列ij转化为坐标xy ************************//

function ij2xy_rect(i,j)
{
	var gapX = width/(resX+1);
	var gapY = height/(resY+1);

	var x = (i+0.5)*gapX;
	var y = (j+0.5)*gapY

	var pos = createVector(x, y);
	return pos;
}


function ij2xy_ring(i,j)
{
	var radiusMin = 0.1*width;
	var thetaGap = TWO_PI / resX;
	var radiusGap = 0.35*width/resY;

	var theta = i*thetaGap;
	var radius = j*radiusGap + radiusMin;

	var offsetX = radius * cos(theta);
	var offsetY = radius * sin(theta);

	var x = width/2 + offsetX;
	var y = height/2 + offsetY;

	var pos = createVector(x, y);
	return pos;
}

function ij2xy_ring_rolling(i,j)
{
	var secs = millis()/1000;
	var thetaSpd = j * 0.03 + 0.01;

	var radiusMin = 0.1 * width;
	var thetaGap = TWO_PI / resX;
	var radiusGap = 0.35 * width / resY;

	var theta = i * thetaGap + thetaSpd*secs;
	var radius = j *radiusGap + radiusMin;

	var offsetX = radius * cos(theta);
	var offsetY = radius * sin(theta);

	var x = width/2 + offsetX;
	var y = height/2 + offsetY;
	
	var pos = createVector(x, y);
	
	return pos;
}

