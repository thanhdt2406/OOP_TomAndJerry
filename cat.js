class Cat extends Animal {
    constructor(name,weight,speed) {
        super(name,weight,speed);
    }
    catchRat(rat){
        return this.speed > rat.speed;
    }
    eatRat(rat){
        if(rat.isAlive){
            rat.isAlive = false;
            this.weight += rat.weight;
        }
    }
}

