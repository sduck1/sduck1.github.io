function Mashine(power) {
    this._power = power; // (1)

    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}


function CoffeMashine(power, capacity) {

    Mashine.call(this);

    let waterAmount = 0;
    let WATER_HEAT_CAPACITY = 4200;
    let timerId ;
    function getTimeToBoil() {
        return WATER_HEAT_CAPACITY*waterAmount*80/power;
    }

    function onReady() {
        alert('кофе готов');
    }

    this.setOnReady = (newReady)=>{
        onReady=newReady;
    };

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.addWater = function (v) {
        this.setWaterAmount(waterAmount+v);
    };

    this.getWaterAmount = function () {
       return waterAmount;
    };

    this.run = function () {
        timerId = setTimeout(function () {
            timerId = null;
            onReady();
        },getTimeToBoil());
    };

    this.getPower = function () {
        alert(power);
    };

    this.isRunning = function () {
        return !!timerId;
    }

}

let coffe = new CoffeMashine(10000, 400);

coffe.run();




