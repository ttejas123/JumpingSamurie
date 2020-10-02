class Unicorn{
  constructor(){
    this.r = 100;
    this.x = 20;
    this.y = height - this.r ;
    this.vy = 0;
    this.gravity = 1;
  }
  
  show(){
    image(uImg,this.x,this.y,this.r,this.r);
    // noFill();
    // ellipseMode(CORNER);
    // ellipse(this.x,this.y, this.r, this.r);
  }
  
  jump(){
    if(this.y == height - this.r - 50){
    this.vy = -18;
    }
  }
  
  hits(trn){
     let x1 = this.x + this.r * 0.5;
     let y1 = this.y + this.r * 0.5;
     let x2 = trn.x + this.r * 0.5;
     let y2 = trn.y + this.r * 0.5;
     return collideCircleCircle(x1, y1,this.r ,x2, y2, trn.r);
  }
  
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y,0,height - this.r - 50);
    
  }
}