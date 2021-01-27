class Box{ 
    constructor(x,y,width,height)
    {
         var option={ restitution:1.0 }
          this.body=Bodies.rectangle(x,y,width,height,option);
           this.width=width;
            this.height=height; 
            World.add(myWorld,this.body);
         }
          display()
          { var pos=this.body.position;
             fill("blue");
              rectMode(CENTER);
               rect(pos.x,pos.y,this.width,this.height);
             }
             }