class wavy {
  //CONSTRUCTOR
  constructor(canvas, obj={}) {
    this.c = document.getElementById(canvas);
    this.ctx = this.c.getContext("2d");
    this.c.width = obj.width || window.innerWidth;
    this.c.height = obj.height || window.innerHeight;
    this.phase = Number(obj.phase) || 360;
    this.damp = obj.damp ;
    this.color = obj.color || "blue";
    this.radius = Number(obj.stroke) || 1;
    this.speed = Number(obj.speed) || 5;
    this.origin = obj.origin || { x: 0, y: this.c.height / 2 };
    this.amplitude = obj.amplitude || this.c.height / 2.5;
    this.speed = obj.speed || 10;
    this.frequency = obj.frequency || 1;
    this.wavelength = obj.wavelength || this.c.width;
  }
  // To Output a Range
  rangeIn = (num ,oS, oE, iS, iE) => oS + ((oE - oS)/(iE - iS))*(num - iS) 

  //To Convert Degrees to Radians
  toRadians = degree => (degree * Math.PI) / 180;

  //Resize
  resize() {
    this.c.setAttribute("width", this.c.width);
    this.c.setAttribute("height", this.c.height);
  }

  //To draw Dot
  dot(x, y, radius, color, ctx) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  //To Draw Wave
  drawWave(p) {
    for (let i = this.origin.x; i < this.wavelength; i += 0.7) {
      let f = this.rangeIn(i,0,this.wavelength - this.origin.x, this.origin.x, this.wavelength);
      let angle = this.toRadians(f + p);
      // let y =
      //   this.origin.y +
      //   this.amplitude * Math.exp(-i * this.damp) * Math.cos(angle);

        let y = this.origin.y - this.amplitude*Math.exp(-i * this.damp) * Math.cos(angle);
        this.dot(i, y, this.radius, this.color, this.ctx);
    }
  }


  clear(){
    this.ctx.clearRect(0, 0, this.c.width, this.c.height);
  }

  //30FPS
  animate30() {
    setInterval(() => {
      if (this.phase == 0) {
        this.phase = 360;
      }

      this.ctx.clearRect(0, 0, this.c.width, this.c.height);
      this.drawWave(this.phase);
      this.phase -= this.speed;
    }, 34);
  }

  //60FPS

  animate60() {
    setInterval(() => {
      if (this.phase == 0) {
        this.phase = 360;
      }

      this.ctx.clearRect(0, 0, this.c.width, this.c.height);
      this.drawWave(this.phase);
      this.phase -= this.speed;
    }, 34);
  }
}
