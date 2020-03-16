class wavy {
  //CONSTRUCTOR
  constructor(canvas, obj) {
    this.c = document.getElementById(canvas);
    this.ctx = this.c.getContext("2d");
    this.c.width = obj.width || window.innerWidth;
    this.c.height = obj.height || window.innerHeight;
    this.phase = Number(obj.phase) || 360;
    this.damp = obj.damp || 0.002;
    this.wavelength = Number(obj.wavelength) || this.c.width;
    this.color = obj.color || "blue";
    this.radius = Number(obj.stroke) || 1;
    this.speed = Number(obj.speed) || 5;
    this.origin = obj.origin || { x: 0, y: this.c.height / 2 };
    this.amplitude = obj.amplitude || this.c.height / 2.5;
  }

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
  wave() {
    for (let i = 0; i < this.origin.x + this.wavelength; i += 0.5) {
      let angle = this.toRadians(i) + this.toRadians(this.phase);
      let y =
        this.origin.y +
        this.amplitude * Math.exp(-i * this.damp) * Math.cos(angle);
      this.dot(i, y, this.radius, this.color, this.ctx);
    }
  }

  //30FPS
  animate30() {
    setInterval(() => {
      if (this.phase == 0) {
        this.phase = 360;
      }

      this.ctx.clearRect(0, 0, this.c.width, this.c.height);
      this.wave();
      this.phase -= 10;
    }, 34);
  }

  //60FPS

  animate60() {
    setInterval(() => {
      if (this.phase == 0) {
        this.phase = 360;
      }

      this.ctx.clearRect(0, 0, this.c.width, this.c.height);
      this.wave();
      this.phase -= 10;
    }, 34);
  }
}
