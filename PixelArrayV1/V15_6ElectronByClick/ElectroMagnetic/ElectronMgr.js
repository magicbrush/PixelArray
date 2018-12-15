// ----------- Electron Manager -----------------//


class ElectronMgr
{
    constructor(speed) {
      this.electrons = new Array();
      this.speed = speed;
      this.lastUpdate = -1;
      this.paused = false;
      this.renderBuffer = null;
    }

    setSpeed(spd)
    {
      this.speed = spd;
      this.lastUpdate = this.speed * millis()/1000;
    }

    start()
    {
      this.paused = false;
      this.lastUpdate = millis()/1000;
    }

    pause()
    {
      this.paused = true;
    }

    update(values)
    {
      if(this.renderBuffer===null)
      {
        this.renderBuffer = createGraphics(width,height);
      }
      if(this.paused)
      {
        return;
      }
      var tNow = this.speed*millis()/1000;
      var dt = tNow - this.lastUpdate;
      for(var i =0;i<this.electrons.length;i++)
      {
        this.electrons[i].applyElectroMagneticField(values);
        this.electrons[i].update(dt);
      }
      for(var i=this.electrons.length-1;i>=0;i--)
      {
        var bDead = this.electrons[i].isDead();

        if(bDead)
        {
         // print("dead");
          this.electrons.splice(i,1);
        }
      }

      this.lastUpdate = tNow;
    }

    render()
    {
      for(var i =0;i<this.electrons.length;i++)
      {
        this.electrons[i].render(this.renderBuffer);
      }
      //print("this.electrons.length: " + this.electrons.length);
      //this.fade();

      push();
      image(this.renderBuffer,0,0,width,height);
      pop();
    }

    addElectron(q,pos,vel,life, qBehaviorId)
    {
      //print("qBehaviorId:" + qBehaviorId);
      let e = new Electron(q,pos,vel,life,qBehaviorId);
      this.electrons.push(e);
    }

    clearElectrons()
    {
      this.electrons.length = 0;
    }

    fade()
    {
      this.renderBuffer.push();
      this.renderBuffer.colorMode(RGB,1);
      this.renderBuffer.fill(1,1,1,0.005);
      this.renderBuffer.rect(-1,-1,width+2,height+2);
      this.renderBuffer.pop();
    }


}







