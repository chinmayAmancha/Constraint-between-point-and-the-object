class Bird extends BaseClass {
  constructor(x,y) {
    super(x,y,50,50);
    this.width = 50;
    this.height = 50;

    this.image = loadImage("sprites/bird.png");
  }
  display() {
    this.body.position.X = mouseX;
    this.body.position.Y = mouseY;
    super.display();
  }
}