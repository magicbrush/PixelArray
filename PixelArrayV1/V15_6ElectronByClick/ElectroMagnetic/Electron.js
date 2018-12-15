// ----------- Electron -----------------//
class Electron {

  constructor(q,pos,vel, life, qBehaviorId) {
    this.startQ = q;
    this.q = q;
    this.pos = pos;
    this.velocity = vel;
    this.acceleration = createVector(0,0);
    this.life = life;
    this.leftLife = life;
    
    this.qBehaviorID = qBehaviorId;
    this.qBehaviors = ["this.q_Decay(dt);", 
                        "this.q_Increase(dt);", 
                        "this.q_CosPositive(dt);", 
                        "this.q_Cos(dt);",
                        "this.q_noise(dt);",
                        "this.q_randChange(dt);"];
    //print("qBehs:" + this.qBehaviors[this.qBehaviorID] + " id:" + this.qBehaviorID);
  }

  applyElectroMagneticField(BField)
  {
    var ij = doInverseTransform(formation,this.pos.x,this.pos.y);
    //print("ij:" + ij);
    var v3Interp = interpFromV3Array(ij.x,ij.y,BField);
    //print("v3Interp:"+ v3Interp);

    this.acceleration.set(0,0);

    //var B = map(v3Interp.x,minValue,maxValue,-1,1);
    var B = value2B(v3Interp.x);
    //print("B:" + B);
    this.applyMagneticB(B);

    var E = value2E(v3Interp.y,v3Interp.z);
    this.applyElectronicE(E);
  }

  applyMagneticB(B)
  {
    var BVec = createVector(0,0,B);
    var velVec = createVector(this.velocity.x,this.velocity.y,0);
    var Force = p5.Vector.mult( p5.Vector.cross(velVec,BVec), this.q*BPower);
    //print("BVec:" + BVec + " velVec" + velVec + " q:" + this.q + " Force:" +Force);
    Force.z = 0;
    this.acceleration.add(Force);
  }

  applyElectronicE(E)
  {
    var Force = p5.Vector.mult(E, this.q*EPower);
    this.acceleration.add(Force);
  }

  update(dt){
    var qFcn = this.qBehaviors[this.qBehaviorID];
    //print("qFcn:" + qFcn);
    eval(qFcn);

    var dv = p5.Vector.mult(this.acceleration,dt);
    this.velocity.add(dv);
    this.velocity.limit(300);

    var dp = p5.Vector.mult(this.velocity,dt);
    this.pos.add(dp);

    this.pos.x = repeat(this.pos.x,width);
    this.pos.y = repeat(this.pos.y,height);

    this.leftLife -= dt;
    //print("this.life:" + this.life);
  }

  isDead()
  {
  	return this.leftLife<0;
  }

  render(renderBuffer) {
    var theta = this.velocity.heading();
    var scl = 2*abs(this.q);
    var cr;
    
    var a = this.leftLife/this.life;
    colorMode(RGB,1);
    if(this.q>=0)
    {
    	cr = color(1,0,0,a);
    }
    else
    {
    	cr = color(0,0,1,a);
    }
    renderBuffer.push();
    {
      renderBuffer.translate(this.pos.x,this.pos.y);
      renderBuffer.scale(scl,scl,1);
      renderBuffer.rotate(theta);
      renderBuffer.noStroke();
      renderBuffer.colorMode(RGB,1);

      if(this.qBehaviorID===0)
      {
        renderBuffer.fill(cr);
        renderBuffer.ellipse(0,0,1,0.6);
        renderBuffer.fill(0);
        renderBuffer.ellipse(0,0,0.3,0.4);
      }
      else if(this.qBehaviorID===1)
      {
        if(this.q>0)
        {
          renderBuffer.fill(1,0.1);
          renderBuffer.strokeWeight(0.1);
          renderBuffer.stroke(0);
        }
        else
        {
          renderBuffer.fill(0,0.1);
          renderBuffer.strokeWeight(0.1);
          renderBuffer.stroke(1);
        }
        
        renderBuffer.ellipse(0,0,1,0.6);
      }
      else if(this.qBehaviorID ===2)
      {
        renderBuffer.fill(cr);
        renderBuffer.ellipse(0,0,1,0.6);
        renderBuffer.fill(cr,0.2);
        renderBuffer.ellipse(0,0,2,1.2);

        
      }
      else if(this.qBehaviorID ===3)
      {
        renderBuffer.stroke(cr);
        renderBuffer.noFill();
        renderBuffer.strokeWeight(0.1);
        renderBuffer.ellipse(0,0,1,1);
        
        
      }
      else if(this.qBehaviorID ===4)
      {
        renderBuffer.fill(cr,0.1);
        renderBuffer.rotate(this.velocity.heading());

        for(var i=0;i<7;i++)
        {
          renderBuffer.ellipse(0,0,2,2);
          //scale(0.85,0.85);
        }
      }
      else if(this.qBehaviorID ===5)
      {
        renderBuffer.fill(cr);
        renderBuffer.stroke(0);
        renderBuffer.strokeWeight(0.2);
        renderBuffer.rotate(this.velocity.heading());
        renderBuffer.rectMode(CENTER);
        renderBuffer.rect(0,0,1,1);
      }
    }
    renderBuffer.pop();
  }

  get leftLife01()
  {
    return this.leftLife/this.life;
  }

  // 电量的变化行为
  q_Decay(dt)
  {
    var life01 = this.leftLife01;
    this.q = life01 * this.startQ;
  }

  q_Increase(dt)
  {
    var life01 = this.leftLife01;
    this.q = this.startQ/(0.1+life01);
  }

  q_CosPositive(dt)
  {
    this.q = map(cos(0.5*millis()/1000),-1,1,0,this.startQ);
  }

  q_Cos(dt)
  {
    this.q = map(cos(0.5*millis()/1000),-1,1,-this.startQ,this.startQ);
  }

  q_noise(dt)
  {
    this.q = map(noise(millis()/1000+this.startQ),0,1,-this.startQ,this.startQ);
  }

  q_randChange(dt)
  {
    if(random(0,1)<5*dt)
    {
      this.q = random(-this.startQ,this.startQ);
    }
  }

}


