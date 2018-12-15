// ----------- Electron Manager -----------------//


class ElectronMgr
{
    constructor(speed) {
      this.electrons = new Array();
      this.speed = speed;
      this.lastUpdate = -1;
      this.paused = false;
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
      if(this.paused)
      {
        return;
      }
      var tNow = this.speed*millis()/1000;
      var dt = tNow - this.lastUpdate;
      for(var i =0;i<this.electrons.length;i++)
      {
        this.electrons[i].applyMagneticField(values);
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
        this.electrons[i].render();
      }
      //print("this.electrons.length: " + this.electrons.length);
    }

    addElectron(q,pos,vel,life)
    {
      let e = new Electron(q,pos,vel,life);
      this.electrons.push(e);
    }

    clearElectrons()
    {
      this.electrons.length = 0;
    }


}






