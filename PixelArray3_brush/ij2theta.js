// ************** 把行列ij转化为旋转角 ************************//

function ij2theta_0(i,j,multiplier)
{
	return 0;
}

function ij2theta_i_plus_j(i,j,multiplier)
{
	var theta = multiplier * (i+j);
	return theta;
}

function ij2theta_i(i,j,multiplier)
{
	var theta = multiplier * i;
	return theta;
}

