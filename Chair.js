class Chair extends Baseclass{
    constructor(x,y,width,height){
         super(x,y,120,150);
         var option = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.image = loadImage("sprites/beach-chair.png")

        }
}