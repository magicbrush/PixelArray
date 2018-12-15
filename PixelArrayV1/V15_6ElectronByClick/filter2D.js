// ------------ 滤镜 ---------------------------//
var lastFilteringTime = -1;
var lastFilterFcn;
function ResetFiltering()
{
	lastFilteringTime = millis()/1000;
}

// -------------- mean --------------//
function Mean_Filtering()
{
	if(lastFilterFcn!=this)
	{
		ResetFiltering();
	}


	var tNow = millis()/1000;
	var dt = tNow - lastFilteringTime;
	var lerpT = dt * filteringSpd/100;

	
	for(var i =0;i<Values.length;i++)
	{
		for(var j=0;j<Values[i].length;j++)
		{
			// 1. 获得当前值
			var v = Values[i][j];
			
			// 2 计算均值
			// 2-1 获得8邻域的行列号
			var nbIds = Get8NeighborsID(i,j,resX,resY);
			// 2-2 计算均值
			var vecSum = createVector(0,0,0);
			for(var k = 0;k<nbIds.length;k++)
			{
				var row = nbIds[k].x;
				var col = nbIds[k].y;
				var vNb = Values[row][col];
				vecSum.add(vNb);

				if(vNb === undefined)
				{
					//print("row:"+ row + " col:"+ col);
				}
			}
			vecSum.div(nbIds.length);

			// 3 计算滤波后的值
			var v2 = p5.Vector.lerp(v,vecSum,lerpT);

			// 4 赋值
			Values[i][j] = v2;
		}
	}
	

	lastFilteringTime = tNow;
	lastFilterFcn = this;
}

// -------------- shifting -------------//
function Shifting_Filtering()
{
	if(lastFilterFcn!=this)
	{
		ResetFiltering();
	}

	var tNow = millis()/1000;
	var dt = tNow - lastFilteringTime;
	var lerpT = dt * filteringSpd/1000;

	for(var i =0;i<Values.length;i++)
	{
		for(var j=0;j<Values[i].length;j++)
		{
			// 1. 获得当前值
			var v = Values[i][j];
			
			// 2 计算均值
			// 2-1 获得8邻域的行列号
			var nbIds = Get8NeighborsID(i,j,resX,resY);
			// 2-2 计算均值
			var vecSum = createVector(0,0,0);
			for(var k = 0;k<nbIds.length;k++)
			{
				var row = nbIds[k].x;
				var col = nbIds[k].y;
				var vNb = Values[row][col];

				if(vNb === undefined)
				{
					//print("row:"+ row + " col:"+ col);
				}
				else
				{
					var minusAmt = createVector(maxValue/2,maxValue/2,maxValue/2);
					var vel = p5.Vector.sub(vNb,minusAmt);
					vecSum.add(vel);
				}
			}

			vecSum.mult(lerpT);
			if(i===10&&j===10)
			{
				print("vecSum:" + vecSum);
			}
			
			// 3 计算滤波后的值
			var v2 = p5.Vector.add(v,vecSum);
			v2.x = frac(v2.x);
			v2.y = frac(v2.y);
			v2.z = frac(v2.z);

			// 4 赋值
			Values[i][j] = v2;
			
		}
	}
	

	lastFilteringTime = tNow;
	lastFilterFcn = this;
}

// -------------- wrap --------------//
function Wrap_Filtering()
{
	if(lastFilterFcn!=this)
	{
		ResetFiltering();
	}

	var tNow = millis()/1000;
	var dt = tNow - lastFilteringTime;
	var lerpT = dt * filteringSpd/1000;

	for(var i =0;i<Values.length;i++)
	{
		for(var j=0;j<Values[i].length;j++)
		{
			// 1. 获得当前值
			var v = Values[i][j];

			// 2 计算滤波后的值
			var iShift = (v.x-maxValue/2)*10;
			var jShift = (v.y-maxValue/2)*10;
			var i2 = floor(repeat(i+iShift,resX));
			var j2 = floor(repeat(j+jShift,resY));
			//print("i2:"+ i2);
			var v2 = Values[i2][j2];

			if(v2===undefined)
			{
				continue;
			}

			// 3 插值
			var v3 = p5.Vector.lerp(v,v2,lerpT);
			
			// 4 赋值
			Values[i][j] = v3;
			
		}
	}
	

	lastFilteringTime = tNow;
	lastFilterFcn = this;
}


// -------------- vibrating --------------//
var VibratingVels = new Array();
function initVibratingVels()
{
	VibratingVels = new Array();
	for(var i=0;i<resX;i++)
	{
	   	VibratingVels[i] = new Array(resY);
	   	for(var j=0;j<resY;j++)
	   	{
	   		VibratingVels[i][j] = createVector(0,0,0);
	   	}
	}
}
function resetVibratingVels()
{
	for(var i=0;i<VibratingVels.length;i++)
	{
	   	for(var j=0;j<VibratingVels[i].length;j++)
	   	{
	   		VibratingVels[i][j].set(0,0,0);
	   	}
	}
}
function Vibrating_Filtering()
{
	if(lastFilterFcn!=this)
	{
		ResetFiltering();
		resetVibratingVels();
	}
	if(VibratingVels.length===0)
	{
		initVibratingVels();
	}

	var tNow = millis()/1000;
	var dt = tNow - lastFilteringTime;
	var lerpT = dt * filteringSpd/400;

	for(var i =0;i<Values.length;i++)
	{
		for(var j=0;j<Values[i].length;j++)
		{
			// 1. 获得当前值
			var v = Values[i][j];

			// 2 计算差值
			// 2-1 获得8邻域的行列号
			var nbIds = Get8NeighborsID(i,j,resX,resY);
			// 2-2 计算总差值
			var delta = createVector(0,0,0);
			for(var k = 0;k<nbIds.length;k++)
			{
				var row = nbIds[k].x;
				var col = nbIds[k].y;
				var vNb = Values[row][col];

				if(vNb === undefined)
				{
					//print("row:"+ row + " col:"+ col);
				}
				else
				{
					delta.add(p5.Vector.sub(vNb,v));
				}
			}
			
			
			// 4 赋值
			VibratingVels[i][j] = 
				p5.Vector.add( VibratingVels[i][j],  p5.Vector.mult(delta,lerpT));

			// 5 改变数值
			Values[i][j] = 
				p5.Vector.add(v, p5.Vector.mult(VibratingVels[i][j],lerpT));
			
		}
	}
	
	lastFilteringTime = tNow;
	lastFilterFcn = this;
}
function Vibrating_Filtering2()
{
	if(lastFilterFcn!=this)
	{
		ResetFiltering();
		resetVibratingVels();
	}
	if(VibratingVels.length===0)
	{
		initVibratingVels();
	}

	var tNow = millis()/1000;
	var dt = tNow - lastFilteringTime;
	var lerpT = dt * filteringSpd/400;

	for(var i =0;i<Values.length;i++)
	{
		for(var j=0;j<Values[i].length;j++)
		{
			// 1. 获得当前值
			var v = Values[i][j];

			// 2 计算差值
			// 2-1 获得8邻域的行列号
			var nbIds = Get8NeighborsID(i,j,resX,resY);
			// 2-2 计算总差值
			var delta = createVector(0,0,0);
			for(var k = 0;k<nbIds.length;k++)
			{
				var row = nbIds[k].x;
				var col = nbIds[k].y;
				var vNb = Values[row][col];

				if(vNb === undefined)
				{
					//print("row:"+ row + " col:"+ col);
				}
				else
				{
					delta.add(p5.Vector.sub(vNb,v));
				}
			}

			delta.x = delta.x * constrain(v.y,0.1,1);
			delta.y = delta.y * constrain(v.z,0.1,1);
			delta.z = delta.z * constrain(v.x,0.1,1);
			
			var vv = p5.Vector.mult(delta,lerpT);

			// 4 赋值
			VibratingVels[i][j] = 
				p5.Vector.add( VibratingVels[i][j], vv);

			var vTgt = 
			p5.Vector.add(v, p5.Vector.mult(VibratingVels[i][j],lerpT));

			// 5 改变数值
			Values[i][j] = vTgt;


			// 改变速度
			if(vTgt.x<0 || vTgt.x>maxValue)
			{
				VibratingVels[i][j].x = 0;
			}
			if(vTgt.y<0 || vTgt.y>maxValue)
			{
				VibratingVels[i][j].y = 0;
			}
			if(vTgt.z<0 || vTgt.z>maxValue)
			{
				VibratingVels[i][j].z = 0;
			}
			
		}
	}
	
	lastFilteringTime = tNow;
	lastFilterFcn = this;
}


// -------------- noise --------------//
function NoiseFiltering()
{
	if(lastFilterFcn!=this)
	{
		ResetFiltering();
	}

	var tNow = millis()/1000;
	var dt = tNow - lastFilteringTime;
	var lerpT = filteringSpd/1000;
	var tScale = tNow * lerpT;

	for(var i =0;i<Values.length;i++)
	{
		for(var j=0;j<Values[i].length;j++)
		{
			// 1. 获得当前值
			var v = Values[i][j];

			// 2 计算滤波后的值
			var nx =
			 	map(noise(tScale + 5*i/resX, tScale + 5*j/resY),
			 		0,1,minValue,maxValue);
			var ny =
			 	map(noise(-tScale*1.023 + 6*i/resX, tScale*0.987 + 5.2*j/resY),
			 		0,1,minValue,maxValue);
			var nz =
			 	map(noise(tScale*0.99+ 5.5*i/resX, -tScale*1.02 + 5.7*j/resY),
			 		0,1,minValue,maxValue);

			// 3 插值
			var v3 = p5.Vector.lerp(v,createVector(nx,ny,nz),1);
			
			// 4 赋值
			Values[i][j] = v3;
			
		}
	}
	

	lastFilteringTime = tNow;
	lastFilterFcn = this;
}


// -------------- BG color --------------//
function BGFiltering()
{
	if(lastFilterFcn!=this)
	{
		ResetFiltering();
	}

	var tNow = millis()/1000;
	var dt = tNow - lastFilteringTime;
	var lerpT = filteringSpd/1000;
	var tScale = tNow * lerpT;

	push();
	/*
	colorMode(HSB,1);
	var cr = color(bgH,bgS,bgB);
	var crx = map(cr.r,0,1,minValue,maxValue);
	var cry = map(cr.g,0,1,minValue,maxValue);
	var crz = map(cr.b,0,1,minValue,maxValue);
	*/

	for(var i =0;i<Values.length;i++)
	{
		for(var j=0;j<Values[i].length;j++)
		{
			// 1. 获得当前值
			var v = Values[i][j];

			// 3 插值
			var v2 = p5.Vector.lerp(v,createVector(bgH,bgS,bgB),lerpT);
			
			// 4 赋值
			Values[i][j] = v2;
		}
	}
	pop();

	lastFilteringTime = tNow;
	lastFilterFcn = this;
}

// -------------- Sin_Sin --------------//
function Sin_Sin_Filtering()
{
	if(lastFilterFcn!=this)
	{
		ResetFiltering();
	}

	var tNow = millis()/1000;
	var dt = tNow - lastFilteringTime;
	var lerpT = filteringSpd/1000;
	var tScale = tNow * lerpT;

	for(var i =0;i<Values.length;i++)
	{
		for(var j=0;j<Values[i].length;j++)
		{
			// 1. 获得当前值
			var v = Values[i][j];

			// 2 计算目标值
			var v2 = createVector(
				map(sin(10*i/resX)*cos(8*j/resY),-1,1,0,1),
				map(sin(12*i/resX)*cos(7*j/resY),-1,1,0,1), 
				map(sin(6*i/resX)*cos(20*j/resY),-1,1,0,1));

			// 3 插值
			var v3 = p5.Vector.lerp(v,v2,lerpT);
			
			// 4 赋值
			Values[i][j] = v3;
		}
	}

	lastFilteringTime = tNow;
	lastFilterFcn = this;
}

// -------------- rand --------------//
function Rand_Filtering()
{
	if(lastFilterFcn!=this)
	{
		ResetFiltering();
	}

	var tNow = millis()/1000;
	var dt = tNow - lastFilteringTime;
	var lerpT = filteringSpd/1000;
	var tScale = tNow * lerpT;

	for(var i =0;i<Values.length;i++)
	{
		for(var j=0;j<Values[i].length;j++)
		{
			// 1. 获得当前值
			var v = Values[i][j];

			// 2 计算目标值
			var v2 = createVector(
				random(-lerpT,lerpT),
				random(-lerpT,lerpT),
				random(-lerpT,lerpT));

			// 3 插值
			var v3 = p5.Vector.add(v,v2);

			v3.x = constrain(v3.x, minValue, maxValue);
			v3.y = constrain(v3.y, minValue, maxValue);
			v3.z = constrain(v3.z, minValue, maxValue);
			
			// 4 赋值
			Values[i][j] = v3;
		}
	}

	lastFilteringTime = tNow;
	lastFilterFcn = this;
}