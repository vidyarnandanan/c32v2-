class box{
    constructor(x,y,width,height){
    var options={
      restitution:0.02,
       density:1,
    friction:1
    }
    this.body=Matter.Bodies.rectangle(x, y, width, height, options)
    this.width=width
    this.height=height
   
    World.add(world,this.body)
    this.Visibility=255
    }
    
    display(){
        console.log(this.body.speed)
        if(this.body.speed<20){
            push ()
            strokeWeight(4)
            stroke("black")
        fill ("cyan")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
            
            pop ()
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility -5;
          score++
          pop();
        }
    }
    
    }