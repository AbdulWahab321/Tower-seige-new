class Blocks1{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.2,
            'density':1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos=this.body.position;

        if(this.body.speed>3){
          World.remove(world,this.body);
          push();
          this.Visibility-=10;
          tint(255,this.Visibility);
         
          pop();
        }else{
          push();
       
          rotate(angle);
          rectMode(CENTER);
          fill("blue");
          rect(pos.x, pos.y, this.width, this.height);
          pop();
        }
      }
}