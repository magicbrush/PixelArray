// ----------- ElectroMagnetic Assist-----------------//

function value2B(value)
{
  return map(value,minValue,maxValue,-1,1);
}

function value2E(y,z)
{
  var ex = map(y,minValue,maxValue,-1,1);
  var ey = map(z,minValue,maxValue,-1,1);
  return createVector(ex,ey);
}


function createElectron0(msg)
{
	createElectron(0,msg.outPos,msg.emitVelocity,msg.rubAmount);

	print("createElectron0");
}

function createElectron1(msg)
{
	createElectron(1,msg.outPos,msg.emitVelocity,5*msg.rubAmount);
	print("createElectron1");
}

function createElectron2(msg)
{
	createElectron(2,msg.outPos,msg.emitVelocity,msg.rubAmount);
	print("createElectron2");
}

function createElectron3(msg)
{
	createElectron(3,msg.outPos,msg.emitVelocity,msg.rubAmount);
	print("createElectron3");
}

function createElectron4(msg)
{
	createElectron(4,msg.outPos,msg.emitVelocity,msg.rubAmount);
	print("createElectron4");
}

function createElectron5(msg)
{
	createElectron(5,msg.outPos,msg.emitVelocity,msg.rubAmount);
	print("createElectron5");
}

function createElectron(qBehId,pos,vel,energy)
{
	var pos = pos;
	var vel = vel;
	//vel.mult(30);
	vel.limit(100);

	print("energy:" + energy);
	var sign = random(0,1)>0.5?-1:1;
	var q = sign*constrain(energy*2,1,10);
	var life = random(25,70);
	    			
	Electrons.addElectron(q,pos,vel,life,qBehId);
}