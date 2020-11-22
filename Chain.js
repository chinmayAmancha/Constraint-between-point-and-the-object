class Chain {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenth: 10
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display() {
        var A = this.chain.bodyA.position;
        var B = this.pointB;
        strokeWeight(4);
        line(A.x,A.y,B.x,B.y);
    }
}