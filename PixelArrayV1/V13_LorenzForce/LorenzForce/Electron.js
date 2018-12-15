// ----------- Electron -----------------//
class Electron {

  constructor(q,pos,vel, life) {
    this.q = q;
    this.pos = pos;
    this.velocity = vel;
    this.acceleration = createVector(0,0);
    this.life = life;
    this.leftLife = life;
    //print("construct this.life:" + this.life);
  }

  applyMagneticField(BField)
  {
    var ij = doInverseTransform(formation,this.pos.x,this.pos.y);
    //print("ij:" + ij);
    var v3Interp = interpFromV3Array(ij.x,ij.y,BField);
    //print("v3Interp:"+ v3Interp);
    var B = map(v3Interp.x,minValue,maxValue,-1,1);
    //print("B:" + B);
    this.applyMagneticB(B);
  }

  applyMagneticB(B)
  {
    var BVec = createVector(0,0,B);
    var velVec = createVector(this.velocity.x,this.velocity.y,0);
    var Force = p5.Vector.mult( p5.Vector.cross(velVec,BVec), this.q);
    //print("BVec:" + BVec + " velVec" + velVec + " q:" + this.q + " Force:" +Force);
    Force.z = 0;
    this.acceleration.set(Force);
  }

  update(dt){
    var dv = p5.Vector.mult(this.acceleration,dt);
    this.velocity.add(dv);
    this.velocity.limit(50);

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

  render() {
    var theta = this.velocity.heading();
    var scl = 2*abs(this.q);
    var cr;
    colorMode(RGB,1);
    var a = this.leftLife/this.life;
    if(this.q>=0)
    {
    	cr = color(1,0,0,a);
    }
    else
    {
    	cr = color(0,0,1,a);
    }
    push();
    translate(this.pos.x,this.pos.y);
    scale(scl,scl,1);
    rotate(theta);
    fill(cr);
    ellipse(0,0,1,0.6);
    pop();
  }


}


