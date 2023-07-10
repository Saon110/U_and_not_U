class player{
    constructor(x, y, vx, vy, radius,color){
        this.position=createVector(x,y);
        this.velocity=createVector(vx,vy);
        this.acceleration=createVector(2,2);
        this.radius=radius;
        this.color=color;
        this.m = 7000  ;
    }

    render ()
    {
        fill (this.color);
        circle (this.position.x,this.position.y,2*this.radius);
    }

    update ()
    {
        //this.velocity.add(this.accelerationx);
        this.position.add(this.velocity) ; 
        if(pot==0)
        this.velocity.mult(.98);
    }

    checkEdges ()
    {
        if (this.position.x + this.radius >= width )
        {
            this.position.x = width - this.radius ; 
            this.velocity.x*=-1 ;  
        }
        if (this.position.x - this.radius <= 0  )
        {
            this.position.x =  this.radius ; 
            this.velocity.x*=-1 ;  
        }
        if (this.position.y + this.radius >= height-50 )
        {
            this.position.y = height-50 - this.radius ; 
            this.velocity.y*=-1 ;  
        }
        if (this.position.y - this.radius <= 0  )
        {
            this.position.y =  this.radius ; 
            this.velocity.y*=-1 ;  
        }
    }

    

    checkCollision(other) {
        // Get distances between the balls components
        let distanceVect = p5.Vector.sub(other.position, this.position);
    
        // Calculate magnitude of the vector separating the balls
        let distanceVectMag = distanceVect.mag();
    
        // Minimum distance before they are touching
        let minDistance = this.radius + other.radius;
    
        if (distanceVectMag < minDistance) {
          if(other.color=='red'||other.color=='green')  po=1; 
          if (other.color == 'black' && this.color == 'white')
          { 
            life-- ; 
            pot=600;
            mot=40;
          }
          if (other.color == 'black') pos = 200 ; 
          let distanceCorrection = (minDistance - distanceVectMag) / 2.0;
          let d = distanceVect.copy();
          let correctionVector = d.normalize().mult(distanceCorrection);
          other.position.add(correctionVector);
          this.position.sub(correctionVector);
    
          // get angle of distanceVect
          let theta = distanceVect.heading();
          // precalculate trig values
          let sine = sin(theta);
          let cosine = cos(theta);
    
          /* bTemp will hold rotated ball this.positions. You 
           just need to worry about bTemp[1] this.position*/
          let bTemp = [new p5.Vector(), new p5.Vector()];
    
          /* this ball's this.position is relative to the other
           so you can use the vector between them (bVect) as the 
           reference point in the rotation expressions.
           bTemp[0].this.position.x and bTemp[0].this.position.y will initialize
           automatically to 0.0, which is what you want
           since b[1] will rotate around b[0] */
          bTemp[1].x = cosine * distanceVect.x + sine * distanceVect.y;
          bTemp[1].y = cosine * distanceVect.y - sine * distanceVect.x;
    
          // rotate Temporary velocities
          let vTemp = [new p5.Vector(), new p5.Vector()];
    
          vTemp[0].x = cosine * this.velocity.x + sine * this.velocity.y;
          vTemp[0].y = cosine * this.velocity.y - sine * this.velocity.x;
          vTemp[1].x = cosine * other.velocity.x + sine * other.velocity.y;
          vTemp[1].y = cosine * other.velocity.y - sine * other.velocity.x;
    
          /* Now that velocities are rotated, you can use 1D
           conservation of momentum equations to calculate 
           the final this.velocity along the x-axis. */
          let vFinal = [new p5.Vector(), new p5.Vector()];
    
          // final rotated this.velocity for b[0]
          vFinal[0].x =
            ((this.m - other.m) * vTemp[0].x + 2 * other.m * vTemp[1].x) /
            (this.m + other.m);
          vFinal[0].y = vTemp[0].y;
    
          // final rotated this.velocity for b[0]
          vFinal[1].x =
            ((other.m - this.m) * vTemp[1].x + 2 * this.m * vTemp[0].x) /
            (this.m + other.m);
          vFinal[1].y = vTemp[1].y;
    
          // hack to avoid clumping
          bTemp[0].x += vFinal[0].x;
          bTemp[1].x += vFinal[1].x;
    
          /* Rotate ball this.positions and velocities back
           Reverse signs in trig expressions to rotate 
           in the opposite direction */
          // rotate balls
          let bFinal = [new p5.Vector(), new p5.Vector()];
    
          bFinal[0].x = cosine * bTemp[0].x - sine * bTemp[0].y;
          bFinal[0].y = cosine * bTemp[0].y + sine * bTemp[0].x;
          bFinal[1].x = cosine * bTemp[1].x - sine * bTemp[1].y;
          bFinal[1].y = cosine * bTemp[1].y + sine * bTemp[1].x;
    
          // update balls to screen this.position
          other.position.x = this.position.x + bFinal[1].x;
          other.position.y = this.position.y + bFinal[1].y;
    
          this.position.add(bFinal[0]);
    
          // update velocities
          this.velocity.x = cosine * vFinal[0].x - sine * vFinal[0].y;
          this.velocity.y = cosine * vFinal[0].y + sine * vFinal[0].x;
          other.velocity.x = cosine * vFinal[1].x - sine * vFinal[1].y;
          other.velocity.y = cosine * vFinal[1].y + sine * vFinal[1].x;

        }
      }

    modechange(other)
    {
        this.velocity = createVector(3,3) ; 
        this.color='gray';
        this.render();
        for(i=0;i<5;i++)
        {
            other[i].color='red';
            other[i].render();
        }
    }
      
    modechangeback(other)
    {
        this.color='white';
        this.render();
        for(i=0;i<5;i++)
        {
            other[i].color='green';
            other[i].render();
        }
    }

    chase(other)
    {
      let distanceVect = p5.Vector.sub(other.position, this.position);
      // let distanceVectMag = distanceVect.mag();
      // distanceVect.div(distanceVectMag); 
      // let vect=this.velocity.mag();
      // distanceVect.mult(vect);
      // this.velocity = distanceVect ;
      if(pot>0) 
      { 
      this.velocity.x = distanceVect.x/50;
      this.velocity.y = distanceVect.y/50;

    }
  }


    
};