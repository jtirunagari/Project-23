class Box
{
constructor(x,y,w,h)
{
    var boxFeatures = {
        isStatic: true,
        friction:2
      }
      this.body=Bodies.rectangle(x,y,w,h,boxFeatures);
      World.add(myWorld,this.body)
      this.w=w
      this.h=h
      
}
display(){
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
fill("red")
rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,this.w,this.h)
pop()
}
}