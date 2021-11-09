class Shovel extends Baseclass{
    constructor(x,y,width,height){
         super(x,y,70,100);
         var option = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.image = loadImage("sprites/shovel.png")

        }
        display(){
          super.display()
          var pos = this.body.position;
          push()
          pos.x = mouseX;
          pos.y = mouseY;
          pop()
        }
}