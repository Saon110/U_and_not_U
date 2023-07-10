class greenball{
    constructor(x, y, vx, vy, radius, color= 'green'){
        this.position=createVector(x,y);
        this.velocity=createVector(vx,vy);
        this.radius=radius;
        this.color=color;
        this.m = 8000 ; 
    }
    render ()
    {
        fill (this.color);
        circle (this.position.x,this.position.y,2*this.radius);
    }
};