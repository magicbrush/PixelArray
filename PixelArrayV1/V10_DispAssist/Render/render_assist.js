// ----------- 辅助显示阵列信息 ----------------------//



function RenderValuesText()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var minGap = min(hGap,vGap);
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var v = Values[i][j];
			var vals = new Array();
			vals[0] = round(100*v.x);
			vals[1] = round(100*v.y);
			vals[2] = round(100*v.z);

			var TF2D = TF2Ds[i][j];
			var x = TF2D.x;
			var y = TF2D.y;

			push();
			{
				colorMode(RGB,1);
				translate(x,y);
				translate(0,-2);
				textAlign(CENTER);
				textSize(12);
				var scl = 0.02*minGap;
				scale(scl,scl);
				for(var k=0;k<3;k++)
				{
					fill(0);
					text(vals[k],0,0);
					fill(valueTxtR,valueTxtG,valueTxtB,valueTxtA);
					text(vals[k],-0.03*minGap,0);
					translate(0,12);
				}
			}
			pop();
		}
	}
	
}


function RenderValuesGrid()
{
	fill(0);
	var hGap = width/resX;
	var vGap = height/resY;
	var minGap = min(hGap,vGap);
	for(var i=0;i<=resX-1;i++)
	{
		for(var j=0;j<=resY-1;j++)
		{
			var TF2D = TF2Ds[i][j];
			var TF2DL;
			if(i<resX-1)
			{
				TF2DL = TF2Ds[i+1][j];
				renderGridLine(TF2D,TF2DL);
			}
			else
			{
				if(j<resY-1)
				{
					TF2DL = TF2Ds[i][j+1];
					renderGridLine(TF2D,TF2DL);
				}
			}
			
			
			var TF2DT;
			if(j<resY-1)
			{
				TF2DT = TF2Ds[i][j+1];
				renderGridLine(TF2D,TF2DT);
			}
			else
			{
				if(i<resX-1)
				{
					TF2DT = TF2Ds[i+1][j];
					renderGridLine(TF2D,TF2DT);
				}
			}
			
		}
	}
	
}

function renderGridLine(TF0,TF1)
{
	push();
	colorMode(RGB,1);
	stroke(gridR,gridG,gridB, gridA);
	strokeWeight(1);
	line(TF0.x,TF0.y,TF1.x,TF1.y);
	pop();
}

