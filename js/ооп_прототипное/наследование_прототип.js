function Animal(name) {
    this.name= name;
    this.speed= 0;
}

Animal.prototype.run = function () {
    alert(this.name + " бежит!");
};

function Rabbit(name) {
    Animal.apply(this,arguments);
}
Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.run = function () {
    Animal.prototype.run.apply(this);
    alert(this.name + ' подпрыгивает');
};

let rab  = new  Rabbit('asda');
rab.run();



