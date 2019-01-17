function CoffeMashine(power) {
    this._power =power;
    this._waterAmount = 0;
}

CoffeMashine.prototype._WATER_HEAT_CAPACITY = 4200;

CoffeMashine.prototype._getTimeToBoil = function(){
    return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeMashine.prototype.run = function () {
    setTimeout(function () {
        alert('кофе готов');
    },this._getTimeToBoil() );
};

CoffeMashine.prototype.setWaterAmount = function (amount) {
       this._waterAmount = amount;
};

CoffeMashine.prototype.getWaterAmount = function () {
   alert(this._waterAmount);
};

let coffe = new CoffeMashine(500000);

coffe.setWaterAmount(400);
coffe.run();
coffe.getWaterAmount();