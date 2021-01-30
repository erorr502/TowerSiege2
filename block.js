class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :1.0,
            isStatic:false
           
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        console.log (this.body.speed);
        if (this.body. speed < 5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else {
          world.remove (world, this.body);
          push()
          this.visibility = this.visibility -3;
          tint (255,this.Visibility);
          pop()
        }
      }
    }