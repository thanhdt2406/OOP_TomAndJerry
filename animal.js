class Animal {
    constructor(name,weight,speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    saySth(message){
       return message;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }

    getSpeed(){
        return this.speed;
    }
    setSpeed(speed){
        this.speed = speed;
    }
}