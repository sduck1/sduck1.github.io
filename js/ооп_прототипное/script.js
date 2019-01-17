function Animal(name) {
    this.name= name;
    this.speed = 0;
}

Animal.prototype.run = function (speed) {
    this.speed += speed;
    alert(this.name + ' бежит со скоростью '+ this.speed);
};

Animal.prototype.stop =function(){
    this.speed = 0;
    alert(this.name + ' остановился');
};

let tiger = new Animal('tiger');

tiger.run(5);
tiger.run(5);
tiger.stop();
alert(tiger.speed);


function CoffeeMachine(power) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.run = function() {
        setTimeout(function() {
            alert( 'Кофе готов!' );
        }, getTimeToBoil());
    };

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

}