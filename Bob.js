class Bob {
  constructor(x,y,r) {
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
      this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
      this.x=x; 
      this.y=y;
      this.r=r;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.w, this.h);
      
    }
  };