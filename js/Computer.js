class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.life4 = "green";
    this.life5 = "green";
    this.life6 = "green";
    this.image = loadImage("./assets/player.png");

  

    World.add(world, this.body);
  }

 
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
  life(){
    push();
    textSize(20);
    fill("white");
    text("Computer", 980, 40);

    fill(this.life4);
    rect(900,50,70,30);
    fill(this.life5);
    rect(970,50,70,30);
    fill(this.life6);
    rect(1040,50,70,30);
    pop();
  }
}
