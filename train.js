class Train{
  constructor(){
    this.r = 100;
    this.x = width;
    this.y = height - this.r - 30;
  }
  
  show(){
    image(tImg,this.x,this.y,this.r,this.r);
    // ellipseMode(CORNER);
    // ellipse(this.x,this.y,this.r,this.r);
  }  

  move(){
    this.x -= 10;
  }  
}