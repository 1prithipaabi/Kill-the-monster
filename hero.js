class Hero{
    constructor(x,y,r){
        var options ={
            density:1,
            frictionAir:1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage('images/Superhero-01.png');
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world,this.body);
        this.trajectory = []
    }
 
    display(){
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      //image(this.image)
        //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    

    //for(var i=0; i<this.trajectory.length; i++){
      
    //}
  
  }
}