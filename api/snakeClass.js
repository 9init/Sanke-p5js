class Snake{
  constructor(){
    this.body = [];
    this.body[0] = createVector(0, 0);
    this.dir = new Dir(0, 0);
  }

  update(){
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.dir.x;
    head.y += this.dir.y;
    this.body.push(head);
  }

  show(){
    for( let i=0; i < this.body.length; i++){
      fill(0);
      noStroke();
      rect(snake.body[i].x, snake.body[i].y, 1, 1);
    }
  }

  grow(){
    let head = this.body[this.body.length-1].copy();
    this.body.push(head);
  }

  setDir(x, y){
    this.dir.x = x;
    this.dir.y = y;
  }

  gameOver(){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x>dimensionX || x<0 || y>dimensionY || y<0)
      return true;
    for(let i=0; i<this.body.length-1; i++){
      let part = this.body[i];
      if(part.x == x && part.y == y)
        return true;
    }
    return false;
  }

  canEat(food){
    let {x, y} = food;
    if(x == this.body[this.body.length-1].x && y == this.body[this.body.length-1].y){
      this.grow();
      return true;
    }
    return false;
  }

}

function Dir(x, y){
  this.x = x;
  this.y = y;
}
