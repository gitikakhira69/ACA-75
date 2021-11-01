class Ground {
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
    
        Composite.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
       
        push();
        stroke("#d8b795")
        fill("#d8b795")
         rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height);       
        pop()
    }
}