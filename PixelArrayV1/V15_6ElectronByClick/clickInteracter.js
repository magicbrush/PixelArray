
class ClickInteracter
{
	constructor(boundRadius, rubThres, timeThres, cr,csr,cfr,csfr,cbr,cbfr) {
		// 动作记录
		this.startPos = createVector(0,0); // 点下的位置  p5.Vector
		this.prevPos = this.startPos; // 上次拖拽的位置
		this.startTime = 0; // 点下的时刻

		// 动作判定参数
	    this.boundRadius = boundRadius; // 边界半径 12
		this.rubThres = rubThres; // 揉的判定阈值 2.5
		this.timeThres = timeThres; // 轻点/按住 的时间阈值

		// 过程积累量
		this.dist = 0; // 从点下到释放的距离
		this.sumDist = 0; // 从点下开始积累的路程
		this.duration = 0; // 点下到释放的总时长
		this.bStay = false;
		this.bMovedOut = false; // 是否已经移出
		this.bRubbed = false; // 是否揉过

		// 导出量
		this.outTime = 0;
		this.outPos = createVector(0,0);
		this.moveVec = createVector(0,0);
		this.emitVelocity = createVector(0,0);
		this.rubAmount = 0;
		
		// 连接指令函数
		this.linkFcns(cr,csr,cfr,csfr,cbr,cbfr); 
  	}

  	packMessage()
  	{
  		var msg = new Object();

  		msg.dist = this.dist; // 从点下到释放的距离
		msg.sumDist = this.sumDist; // 从点下开始积累的路程
		msg.duration = this.duration; // 点下到释放的总时长
		msg.bMovedOut = this.bMovedOut; // 是否已经移出
		msg.bRubbed = this.bRubbed; // 是否揉过
		msg.outTime = this.outTime; // 移出边界耗时
		msg.outPos = this.outPos; // 移出边界的位置
		msg.moveVec = this.moveVec; // 释放时的总位移矢量
		msg.emitVelocity = this.emitVelocity; // 释放时的速度
		msg.rubAmount = this.rubAmount; // 揉的总量（揉的越多，量越大）
		msg.toString = function()
		{
			var txt = "Message: \n";
			txt += "msg.dist: " + this.dist + " 总位移 \n";
			txt += "msg.sumDist: " + this.sumDist + " 总路程 \n";
			txt += "msg.duration: " + this.duration + " 总时长 \n";
			txt += "msg.bMovedOut: " + this.bMovedOut + " 是否移出范围 \n";
			txt += "msg.bRubbed: " + this.bRubbed + " 是否揉过 \n";
			txt += "msg.outTime: " + this.outTime + " 移出边界耗时 \n";
			txt += "msg.moveVec: " + this.moveVec + " 释放时的总位移矢量 \n";
			txt += "msg.emitVelocity: " + this.emitVelocity + " 释放时的速度 \n";
			txt += "msg.rubAmount: " + this.rubAmount + " 揉的总量（揉的越多，量越大）\n";
			return txt;
		}
		return msg;
  	}

  	linkFcns(cr,csr,cfr,csfr,cbr,cbfr)
	{
		this.ClickReleaseFcn = cr;
		this.ClickStayReleaseFcn = csr;
		this.ClickFlipReleaseFcn = cfr;
		this.ClickStayFlipReleaseFcn = csfr;
		this.ClickRubReleaseFcn = cbr;
		this.ClickRubFlipReleaseFcn = cbfr;
	}

	mouseMoved()
	{
		//print("mouseMoved");
	}

	mousePressed()
	{
		this.startPos = createVector(mouseX,mouseY);
		this.prevPos = this.startPos;
		this.startTime = this.time;

		this.dist = 0;
		this.sumDist = 0;
		this.duration = 0;
		this.bMoveOut = false;
		this.bRubbed = false;

		this.outTime = 0;
		this.outPos = createVector(0,0);
		this.moveVec = createVector(0,0);
		this.emitVelocity = createVector(0,0);
		this.rubAmount = 0;

		//print("mousePressed");
	}

	mouseDragged() {
		this.dragged();

		//print("dist:" + dist);
	  	//print("mouseDragged");
	}


	mouseReleased()
	{
		this.dragged();

		var pos = createVector(mouseX,mouseY);

		var bMoveOut = this.bMoveOut;
		var bStay = this.bStay;
		var bRubbed = this.bRubbed;

		if(bMoveOut)
		{
			this.moveVec = p5.Vector.sub(pos,this.startPos);
			var outMove = p5.Vector.sub(pos,this.outPos);
			if(outMove.mag()<0.5)
			{
				outMove = p5.Vector.sub(this.outPos,this.startPos);
				outMove.mult(0.2);
			}
			var dt = this.time - this.outTime + 0.2;
			this.emitVelocity = p5.Vector.div(outMove,dt);
		}
		else
		{
			this.judgeBStay();
			this.judgeBRubed();
			bStay = this.bStay;
			bRubbed = this.bRubbed;
			this.outPos = pos;
			this.moveVec = p5.Vector.sub(pos,this.startPos);
			this.emitVelocity = p5.Vector.div(this.moveVec,this.time - this.startTime);
		}

		var msg = this.packMessage();

		if(!bMoveOut && !bStay && !bRubbed)
		// 轻点
		{
			print("bMoveOut:" + bMoveOut + " this.bMoveOut:" + this.bMoveOut);
			this.ClickReleaseFcn(msg);
		}
		else if(!bMoveOut && bStay && !bRubbed)
		// 重点
		{
			this.ClickStayReleaseFcn(msg);
		}
		else if(bMoveOut && !bStay && !bRubbed)
		// 划出
		{
			this.ClickFlipReleaseFcn(msg);
		}
		else if(bMoveOut && bStay && !bRubbed)
		// 弹出
		{
			this.ClickStayFlipReleaseFcn(msg);
		}
		else if(!bMoveOut && bRubbed)
		// 按揉
		{
			this.ClickRubReleaseFcn(msg);
		}
		else if(bMoveOut && bRubbed)
		// 蓄力划出
		{
			this.ClickRubFlipReleaseFcn(msg);
		}

		//print("mouseReleased");
	}

	mouseClicked()
	{
		//print("mouseClicked");
	}

	dragged()
	{
		var pos = createVector(mouseX,mouseY);
		
		var move = p5.Vector.sub(pos,this.prevPos);
		var d = move.mag();

		var offset = p5.Vector.sub(pos,this.startPos);

		this.dist = offset.mag();
		this.sumDist += d;
		this.duration = this.time-this.startTime;

		var outFlag = this.dist>=this.boundRadius;
		print("outFlag:"+ outFlag);
		if(outFlag)
		{
			print("moveOut!");
			this.bMoveOut = true;
			this.outTime = this.time;
			this.outPos = pos;
			
			this.judgeBStay();
			this.judgeBRubed();
		}
	  
	  	this.prevPos = pos;
	}

	judgeBStay()
	{
		this.bStay = this.duration > this.timeThres;
	}

	judgeBRubed()
	{
		this.rubAmount = this.sumDist/this.dist;
		this.bRubbed = this.rubAmount>this.rubThres;
	}

	get time()
	{
		return millis()/1000;
	}

}